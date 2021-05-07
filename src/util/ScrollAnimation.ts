import {DirectiveBinding} from 'vue/types/options';

const attributeName = 'data-scroll-animation';
const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.intersectionRatio > 0) {
                    animatedScrollObserver.unobserve(entry.target);
                }
                const binding = entry.target.getAttribute(attributeName);
                if (binding != null) {
                    entry.target.classList.add(binding + '-to');
                } else {
                    entry.target.classList.add('enter-to');
                }
            }
        });
    }
);

export default {
    bind(el: Element, binding: DirectiveBinding) {

        if (binding.value != undefined) {
            const bindingValue = binding.value + '-enter';
            el.setAttribute(attributeName, bindingValue);
            el.classList.add(bindingValue);
        } else {
            el.classList.add('enter');
        }
        animatedScrollObserver.observe(el);
    }
};
