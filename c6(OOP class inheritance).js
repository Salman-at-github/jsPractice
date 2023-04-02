//base or super class
class Tree {
    constructor(country="Earth", soil) {
        this.country = country;
        this.soil = soil;
    };
    placeAndSoilInfo() {
        console.log(`Found in ${this.country} and grows in ${this.soil} soil, `)
    }
};

//sub class
class SeasonalTree extends Tree {
    constructor(country, soil, season) {
        super(country, soil);
        this.season = season;
    };
    infoOnSeason() {
        console.log(` grows well in ${this.season} season `)
    }
};

// sub sub class
class SpecificTree extends SeasonalTree {
    constructor(country, soil, season, name) {
        super(country, soil, season);
        this.name = name;
    };
    giveCompleteInfo() {
        console.log(`Found in ${this.country} and grows in ${this.soil} soil, the ${this.name} tree grows well in ${this.season} season.`)

    }
};

const mangoTree = new SpecificTree("India","Red","Summer","Mango");
mangoTree.giveCompleteInfo();
// mangoTree.placeAndSoilInfo();
// mangoTree.infoOnSeason();

