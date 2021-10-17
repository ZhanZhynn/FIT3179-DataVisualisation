{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "A population pyramid for the US in 2000.",
    "data": { "url": "https://raw.githubusercontent.com/ZhanZhynn/FIT3179-Visualization2/main/data/catsvdogs.csv"},

  "spacing": 0,
  "hconcat": [{

    "title": "Cats",
    "mark": "bar",
    "encoding": {
      "y": {
        "field": "Region", "axis": null, "sort": "descending"
      },
      "x": {
        "aggregate": "sum", "field": "CatOwningHouseholds",
        "title": "Cat Owners",
        "axis": {"format": "s"},
        "sort": "descending"
      },
      "color": {
        "field": "Cats",
        "scale": {"range": ["#675193", "#ca8861"]},
        "legend": null
      }
    }
    
  }, {
    "width": 20,
    "view": {"stroke": null},
    "mark": {
      "type": "text",
      "align": "center"
    },
    "encoding": {
      "y": {"field": "Region", "type": "ordinal", "axis": null, "sort": "descending"},
      "text": {"field": "Region", "type": "ordinal"}
    }
  }, {

    "title": "Dogs",
    "mark": "bar",
    "encoding": {
      "y": {
        "field": "Region", "title": null,
        "axis": null, "sort": "descending"
      },
      "x": {
        "aggregate": "sum", "field": "DogOwningHouseholds",
        "title": "Dog Owners",
        "axis": {"format": "s"}
      },
      "color": {
        "legend": null
      }
    }
  }],
  "config": {
    "view": {"stroke": null},
    "axis": {"grid": false}
  }
}
