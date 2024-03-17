export const cosineSimilarity =  (vec1, vec2) => {
    
    let dotProduct = 0;
    for (let i = 0; i < vec1.length; i++) {
      dotProduct += vec1[i] * vec2[i];
    }
  
    
    let normVec1 = 0;
    let normVec2 = 0;
    for (let i = 0; i < vec1.length; i++) {
      normVec1 += vec1[i] ** 2;
      normVec2 += vec2[i] ** 2;
    }
    normVec1 = Math.sqrt(normVec1);
    normVec2 = Math.sqrt(normVec2);
    
    return dotProduct / (normVec1 * normVec2);
  }

  function preprocessString(str) {
    return str.toLowerCase().split(' ');
  }

  export const  calcularSimilaridadeCosseno = (str1, str2) => {
    const tokens1 = preprocessString(str1);
    const tokens2 = preprocessString(str2);
    const vec1 = [];
    const vec2 = [];
    const allTokens = new Set([...tokens1, ...tokens2]);
  
    for (const token of allTokens) {
      vec1.push(tokens1.filter(t => t === token).length);
      vec2.push(tokens2.filter(t => t === token).length);
    }
  
    return cosineSimilarity(vec1, vec2);
  }


