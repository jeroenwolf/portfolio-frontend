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

    document.getElementById("readMoreLanguages").addEventListener('click', () => {
        const changeLinkTextForTechnology = true;
        changeTextAndToggleElements("showLanguages", "readMoreLanguages", "languagesDots", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreFrameworks").addEventListener('click', () => {
        const changeLinkTextForTechnology = true;
        changeTextAndToggleElements("showFrameworks", "readMoreFrameworks", "frameworksDots", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreWebFrameworks").addEventListener('click', () => {
        const changeLinkTextForTechnology = true;
        changeTextAndToggleElements("showWebFrameworks", "readMoreWebFrameworks", "webFrameworksDots", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreMethodologies").addEventListener('click', () => {
        const changeLinkTextForTechnology = true;
        changeTextAndToggleElements("showMethodologies", "readMoreMethodologies", "methodologiesDots", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreDatabases").addEventListener('click', () => {
        const changeLinkTextForTechnology = true;
        changeTextAndToggleElements("showDatabases", "readMoreDatabases", "databasesDots", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreCI").addEventListener('click', () => {
        const changeLinkTextForTechnology = true;
        changeTextAndToggleElements("showCI", "readMoreCI", "ciDots", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreSourceControls").addEventListener('click', () => {
        const changeLinkTextForTechnology = true;
        changeTextAndToggleElements("showSourceControls", "readMoreSourceControls", "sourceControlsDots", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreClouds").addEventListener('click', () => {
        const changeLinkTextForTechnology = true;
        changeTextAndToggleElements("showClouds", "readMoreClouds", "cloudsDots", changeLinkTextForTechnology);
    });

    document.getElementById("readMorePortfolio").addEventListener('click', () => {
        const changeLinkTextForTechnology = false;
        changeTextAndToggleElements("showPortfolio", "readMorePortfolio", "", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreBusy").addEventListener('click', () => {
        const changeLinkTextForTechnology = false;
        changeTextAndToggleElements("showBusy", "readMoreBusy", "", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreExperiences").addEventListener('click', () => {
        const changeLinkTextForTechnology = false;
        changeTextAndToggleElements("showExperiences", "readMoreExperiences", "experiencesDots", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreConferences").addEventListener('click', () => {
        const changeLinkTextForTechnology = false;
        changeTextAndToggleElements("showConferences", "readMoreConferences", "", changeLinkTextForTechnology);
    });

    document.getElementById("readMoreCourses").addEventListener('click', () => {
        const changeLinkTextForTechnology = false;
        changeTextAndToggleElements("showCourses", "readMoreCourses", "", changeLinkTextForTechnology);
    });

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