(function () {
    const headerElement = document.getElementById("areaHeader");
    const goUpButton = document.getElementById("goUp");

    window.addEventListener("scroll", () => {
        const yOffset = window.pageYOffset;

        if (yOffset > 150) {
            addClass(headerElement, "open");
        } else {
            removeClass(headerElement, "open");
        }
        if (yOffset > 250) {
            addClass(goUpButton, "show");
        } else {
            removeClass(goUpButton, "show");
        }
    })

    function addClass(element, className) {
        let classList = element.className.split(" ");
        if (classList.indexOf(className) === -1) {
            classList.push(className);
            classList = classList.join(" ");
            element.className = classList;
        }
    }

    function removeClass(element, className) {
        let classList = element.className.split(" ");
        if (classList.indexOf(className) !== -1) {
            classList = classList.filter(function (e) {
                return e !== className
            });
            element.className = classList;
        }
    }

    const listener = (classToToggle, elementByIdLinkReadMore, elementByIdDots, changeLinkTextForTechnology) => () => {
        changeTextAndToggleElements(classToToggle, elementByIdLinkReadMore, elementByIdDots, changeLinkTextForTechnology);
    };

    document.getElementById("readMoreLanguages").addEventListener('click', listener("showLanguages", "readMoreLanguages", "languagesDots", true));
    document.getElementById("readMoreIdes").addEventListener('click', listener("showIdes", "readMoreIdes", "idesDots", true));
    document.getElementById("readMoreFrameworks").addEventListener('click', listener("showFrameworks", "readMoreFrameworks", "frameworksDots", true));
    document.getElementById("readMoreWebFrameworks").addEventListener('click', listener("showWebFrameworks", "readMoreWebFrameworks", "webFrameworksDots", true));
    document.getElementById("readMoreMethodologies").addEventListener('click', listener("showMethodologies", "readMoreMethodologies", "methodologiesDots", true));
    document.getElementById("readMoreDatabases").addEventListener('click', listener("showDatabases", "readMoreDatabases", "databasesDots", true));
    document.getElementById("readMoreCI").addEventListener('click', listener("showCI", "readMoreCI", "ciDots", true));
    document.getElementById("readMoreSourceControls").addEventListener('click', listener("showSourceControls", "readMoreSourceControls", "sourceControlsDots", true));
    document.getElementById("readMoreClouds").addEventListener('click', listener("showClouds", "readMoreClouds", "cloudsDots", true));
    document.getElementById("readMorePortfolio").addEventListener('click', listener("showPortfolio", "readMorePortfolio", "", false));
    document.getElementById("readMoreBusy").addEventListener('click', listener("showBusy", "readMoreBusy", "", false));
    document.getElementById("readMoreExperiences").addEventListener('click', listener("showExperiences", "readMoreExperiences", "experiencesDots", false));
    document.getElementById("readMoreConferences").addEventListener('click', listener("showConferences", "readMoreConferences", "", false));
    document.getElementById("readMoreCourses").addEventListener('click', listener("showCourses", "readMoreCourses", "", false));

    function changeTextAndToggleElements(classToToggle, elementByIdLinkReadMore, elementByIdDots, changeLinkTextForTechnology) {
        const elementsToToggle = document.querySelectorAll("." + classToToggle);
        const linkReadMore = document.getElementById(elementByIdLinkReadMore);

        if (toggleNeededForDotsElement(elementByIdDots)) {
            const dotsElement = document.getElementById(elementByIdDots);
            dotsElement.classList.toggle('dotsHide');
        }

        elementsToToggle.forEach((element) => {
            element.classList.toggle('show');
        });

        let innerHtmlLess;
        let innerHtmlMore;
        if (changeLinkTextForTechnology) {
            innerHtmlLess = "- MINDER TECHNOLOGIEËN";
            innerHtmlMore = "+ MEER TECHNOLOGIEËN";
        } else {
            innerHtmlLess = "- MINDER INFORMATIE";
            innerHtmlMore = "+ MEER INFORMATIE";
        }

        elementsToToggle.forEach((listItem) => {
            if (listItem.classList.contains("show")) {
                linkReadMore.innerHTML = innerHtmlLess;
            } else {
                linkReadMore.innerHTML = innerHtmlMore;
            }
        });
    }

    function toggleNeededForDotsElement(elementByIdDots) {
        return elementByIdDots.trim().length > 0;
    }

})();