const SCRIPTS = [
    {
      name: "Latin",
      ranges: [[0x0000, 0x007F], [0x0080, 0x00FF], [0x0100, 0x017F], [0x0180, 0x024F], [0x2C60, 0x2C7F], [0xA720, 0xA7FF], [0xAB30, 0xAB6F]],
      direction: "ltr"
    },
    {
      name: "Arabic",
      ranges: [[0x0600, 0x06FF], [0x0750, 0x077F], [0x08A0, 0x08FF], [0xFB50, 0xFDFF], [0xFE70, 0xFEFF]],
      direction: "rtl"
    },
    {
      name: "Hebrew",
      ranges: [[0x0590, 0x05FF], [0x0600, 0x06FF], [0xFB1D, 0xFB4F], [0xFE70, 0xFEFF]],
      direction: "rtl"
    },
  ];
  

function dominantDirection(text) {
    function characterScript(code) {
      for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => code >= from &&
                                               code < to)) {
          return script;
        }
      }
      return null;
    }
  
    function countBy(items, groupName) {
      let counts = [];
      for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
          counts.push({name, count: 1});
        } else {
          counts[known].count++;
        }
      }
      return counts;
    }
  
    function characterDirection(char) {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }
  
    let counted = countBy(text, char => {
      let direction = characterDirection(char);
      return direction;
    }).filter(({name}) => name != "none");
  
    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  console.log(dominantDirection("Hello!")); 
  console.log(dominantDirection("Hey, مساء الخير")); 
  