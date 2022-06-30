export function trimStringFields(data){
    Object.keys(data).forEach(key => {
        if (typeof data[key] === 'string' || data[key] instanceof String)
          data[key] = data[key].trim();
      });
    return data 
}