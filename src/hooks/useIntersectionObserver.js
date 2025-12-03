import { useState, useEffect } from "react";

/**
 * Hook que devuelve `true` si el elemento referenciado está en el viewport.
 * @param {React.RefObject} elementRef - La referencia al elemento a observar.
 * @param {Object} options - Opciones para el IntersectionObserver.
 */
const useIntersectionObserver = (
  elementRef,
  { threshold = 0.1, root = null, rootMargin = "0%", freezeOnceVisible = true }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento es visible, actualizamos el estado y dejamos de observar si es necesario.
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (freezeOnceVisible) {
            observer.unobserve(node);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible]);

  return isVisible;
};

export default useIntersectionObserver;
