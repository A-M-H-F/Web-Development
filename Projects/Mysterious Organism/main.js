// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}


const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
  
    mutate() {
      let i = Math.floor(Math.random() * this.dna.length);
      let randomB = returnRandBase();
      console.log(`${i} -- DNA: ${this.dna[i]} -- randomB: ${randomB}`);
      if (this.dna[i] !== randomB) {
         randomB = this.dna[i]
         console.log(`${i} -- DNA: ${this.dna[i]} -- randomB: ${randomB}`);
      }
      return this.dna;
      },

    compareDNA (pAequor) {
      let commonElement = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          commonElement++;
        }
      }
      let identicalBasePercentage = ((commonElement / this.dna.length) * 100); // .toFixed(2);
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${commonElement} elements which is  ${identicalBasePercentage}% DNA in common.`);
    },

    willLikelySurvive () {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          counter++
        }
      }
      let likelySurvive = ((counter / this.dna.length) * 100).toFixed(2);
      return likelySurvive >= 60 ? true : false;
    },

    complementStrand() {
      for (let i = 0; i < this.dna.length; i++){
        complementStrand = [];
        switch (this.dna[i]){
          case 'A':
            complementStrand.push('T')
            break;
          case 'T':
            complementStrand.push('A')
            break;
          case 'C':
            complementStrand.push('G')
            break;
          case 'G':
            complementStrand.push('C')
            break;
        };
      };
      return complementStrand;
    }

  }
};

let Create30 = () => {
  let pAequorInstances = [];
  let i = 0;
  while(pAequorInstances.length < 31){
    let instance = pAequorFactory(i, mockUpStrand());
      if(instance.willLikelySurvive() === true){
        i++;
        pAequorInstances.push(instance)
      }
  }
  return pAequorInstances;
};

let thirtyInstances = Create30(); 
// console.log(thirtyInstances[25].willLikelySurvive());
for (let i = 0; i < thirtyInstances.length; i++){
  console.log(`${thirtyInstances[i].dna}--- ${thirtyInstances[i].specimenNum}--- ${thirtyInstances[i].willLikelySurvive()}`);
};




let test = pAequorFactory(1, mockUpStrand())
let pAequor = pAequorFactory(8, mockUpStrand());
// console.log(test.dna.length)
test.mutate();

test.compareDNA(pAequor)

console.log(test.complementStrand());

console.log(test.willLikelySurvive());
console.log(pAequor.willLikelySurvive());
