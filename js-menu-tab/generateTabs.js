
var tabSwitcher = {

    // creates Super hero tabs
    createSuperHeroTabs: function () {
        var oSuperHeroTabConfig = new tabConfiguration();
        oSuperHeroTabConfig.tabName = ["VCC", "VSC", "VAO", "VLAO", "VJO", "VMC"];
        oSuperHeroTabConfig.commonClass = "superHeroTabCollection";
        oSuperHeroTabConfig.tabID = ["Batman_Tab", "Luke_Tab", "Hobbit_Tab", "Spock_Tab", "Hulk_Tab", "JackSparrow_Tab"];
        oSuperHeroTabConfig.tabClickRequestFunction = tabSwitcher.displaySuperHeroSelectedTab;
        oSuperHeroTabConfig.customID = "superHeroTabs";
        oSuperHeroTabConfig.defaultTab = "VCC"
        createTabs(oSuperHeroTabConfig);
    },

    // method to switch Super hero tab sections
    // @parameter: sSelectedTab - tab ID that is selected
    displaySuperHeroSelectedTab: function (sSelectedTab) {
        $(".tabContainerClass").show().not("#" + sSelectedTab + "Content").hide();
        if ($("#" + sSelectedTab + "Content").is(":empty")) {
            $("#" + sSelectedTab + "Content").append();
        }
    }
}

$(document).ready(function () {
    tabSwitcher.createSuperHeroTabs();
});