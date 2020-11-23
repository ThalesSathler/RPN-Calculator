class Node {
  constructor(data){
    this.data = data;
    this.no_esq = null
    this.no_dir = null 
  }
    
  imprimePreOrdem(no){
    let resp = ""
    if(no!=null){
      if (no.data!='-1' & no.data!='#'){
        if(no.data!='*'){
            resp = resp + no.data
            resp = resp + this.imprimePreOrdem(no.no_esq)
            resp = resp + this.imprimePreOrdem(no.no_dir)
        }else{
          console.log("Expressão inválida!")
        }
      }
    }
    return resp
  }

  imprimePosOrdem(no){
    let resp = ""
    if(no!=null){
      if(no.data!='-1' & no.data!='#'){
          resp += this.imprimePosOrdem(no.no_esq)
          resp += this.imprimePosOrdem(no.no_dir)
          if(no.data!='*'){
            resp += no.data
          }else{
            console.log("Expressão inválida")
          }
      }
    }
    return resp
  }
} 
function notPolonesa(formula){
  let pilha = []
  let raiz = new Node('-1')        
  let ptr = raiz
  let i = 0

  while(i<formula.length) {
    let c = formula[i]

    if (c == '(') {
      ptr.data = "#"
      let novoptr = ptr
      pilha.push(novoptr)
      let novoNode = new Node('-1')
      ptr.no_esq = novoNode
      ptr = ptr.no_esq
    } else if ( c == ')') {
      pilha.pop()
    }else if (c =='P' || c == 'Q' || c == 'R' || c == 'S' ){
      ptr.data = c
      if (i + 1 < formula.length ){
        if (formula[i+1] == '1' || formula[i+1] == '2' ){
          let info = c+formula[i+1]
          ptr.data = info
        }
      }
    } else if (c == 'v' || c == '^' || c == '>' || c == '<' ){
      if (pilha.length != 0) {
        pilha.slice(-1)[0].data = c
        let novoNode = new Node('-1')
        pilha.slice(-1)[0].no_dir = novoNode
        ptr = pilha.slice(-1)[0].no_dir
      }else{
        console.log("Expressão invalida")
      }
    } else if (c == '~') {
      if (formula[i+1] == 'P' || formula[i+1] == 'Q' || formula[i+1] == 'R' || formula[i+1] == 'S') { 
        pilha.slice(-1)[0].data = '~'
        let novo = new Node('-1')
        pilha.slice(-1)[0].no_dir = novo
        pilha.slice(-1)[0].no_esq = null
        ptr =  pilha.slice(-1)[0].no_dir
      } else if (formula[i+1] == '(') {
        ptr.data = '~'
        let novo = new Node('-1')
        ptr.no_dir = novo
        ptr = ptr.no_dir
        pilha.slice(-1)[0].data = '*'
      }
    }
    i = i+1
  }
  let preOrdem = raiz.imprimePreOrdem(raiz)
  let posOrdem = raiz.imprimePosOrdem(raiz)
  return [preOrdem, posOrdem]
}

function checarEntrada(entrada){
  let entry = Array.from(entrada)
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  let simbolos = entry.reduce((acc, actual) => {
    if(letters.includes(actual)) acc+=1
    return acc
  })

  if(simbolos > 10) console.log("Erro! contem mais de 10 simbolos")
}

function doNotation(formula){
  checarEntrada(formula)
  return notPolonesa(formula)   
}

export default doNotation
