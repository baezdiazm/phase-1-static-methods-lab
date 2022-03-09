class Formatter {
  //add static methods here

  static capitalize(str) {
    const string = str.split('')
    string[0] = string[0].toUpperCase()
    return string.join('')
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, "");
  }

  static titleize( phrase ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let words = phrase.split( " " )
    for ( let i = 0; i < words.length; i++ ) {
      if ( i == 0 ) {
        result.push( this.capitalize( words[ i ] ) )
      } else {
        if ( exceptions.includes( words[ i ] ) ) {
          result.push( words[ i ] )
        } else {
          result.push( this.capitalize( words[ i ] ) )
        }
      }

    }
    return result.join( " " );
  }

}