const sElement = document.querySelector("#s-element,.area2");

        function changeShape() {
            sElement.style.borderRadius = "50%";
            setTimeout(reverseShape, 4000);
        }

        function reverseShape() {
            sElement.style.borderRadius = "0%";
            setTimeout(changeShape, 4000);
        }

        changeShape();
        animateTransition();