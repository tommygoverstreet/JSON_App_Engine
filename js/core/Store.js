/* Saves the blueprint between visits. Swap the storage here to change where data lives. */
Engine.Store=class{
  constructor(key){this.key=key}
  load(){try{return JSON.parse(localStorage.getItem(this.key))}catch(e){return null}}
  save(v){try{localStorage.setItem(this.key,JSON.stringify(v))}catch(e){}}
};
