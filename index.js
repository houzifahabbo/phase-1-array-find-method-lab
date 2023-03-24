function superbowlWin(record) {
    function findW (element){
      return element.result === 'W';
    } 
    const result = record.find(findW)
    if (result !== undefined){
      return result.year
    }
  }