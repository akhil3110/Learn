export function calculate1(
    a: number,
    b:number,
    type: "sum" | "mul" | "div" | "sub"
  ): number{
      if(type=="sum")
        return a+b
      if(type=="mul")
        return a*b
      if(type=="div")
        return a/b
      if(type=="sub")
        return a-b
  
    return -1
  }
  
  
  
  let finalsum: number =  calculate1(6,5,"sub")
  console.log(finalsum)