  const memoryWork = (values, action) => {
    if (action === 'mc') {
      return {
        ...values,
        memory:'0'
      }
    }else if (action === 'mr') {
      return {
        ...values,
        dispValue: values.memory
      }
    }else if (action === 'm-') {
      return {
        ...values,
        memory: values.memory - values.dispValue
      }
    }else if (action === 'm+') {
      return {
        ...values,
        memory: `${(values.memory/1)+(values.dispValue/1)}`
      }
    }
  }

  const logicalOperate = (values, action) => {
    if (action === '+') {
        return {
            ...values,
            dispValue: values.oldValue + values.dispValue,
            oldValue:null,
            symbol: null,
        }
    }
    if (action === '-') {
        return {
            ...values,
            dispValue: values.oldValue - values.dispValue,
            oldValue:null,
            symbol: null,
        }
    }
    if (action === '*') {
        return {
            ...values,
            dispValue: values.oldValue * values.dispValue,
            oldValue:null,
            symbol: null,
        }
    }
    if (action === '/') {
        return {
            ...values,
            dispValue: values.oldValue / values.dispValue,
            oldValue:null,
            symbol: null,
        }
    }
    if (action === '%') {
        return {
            ...values,
            dispValue: values.oldValue/100 * values.dispValue,
            oldValue:null,
            symbol: null,
        }
    }
  }

  const calculate = (values, action) => {
    if (Number.isInteger(action/1)) {
        return {
            ...values,
            dispValue: values.dispValue[0] === '0' && values.dispValue[1] !== '.'
              ? action
              : `${(values.dispValue + action)/1}`
        }
    }else if (action === ',') {
        if (values.dispValue.includes('.')) {
          return values
        } else {
          return {
              ...values,
              dispValue: values.dispValue + '.'
          }
        }
    }else if (action === 'AC') {
        return {
            oldValue: null,
            dispValue: '0',
            memory: '0',
            symbol: null,
          }
    }else if (action[0] === 'm') {
        return memoryWork(values, action)
    }else if (action === '+/-') {
        return {
            ...values,
            dispValue: values.dispValue*-1
        }
    }else if(['%', '/', '*', '-', '+'].some(item => item === action)) {
        if (values.symbol) {
            return logicalOperate(values, action)
        }else {
            return {
                ...values,
                oldValue: values.dispValue,
                dispValue: '0',
                symbol: action
            }
        }
    }else if(action === '=' && values.symbol) {
       return logicalOperate(values, values.symbol)
    }
    return values
  }

  export default calculate