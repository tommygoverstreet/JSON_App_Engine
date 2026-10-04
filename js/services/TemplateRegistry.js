/* Each file in js/templates/ calls Engine.templates.add(key, blueprint). */
Engine.templates=new class{
  constructor(){this.map={}}
  add(key,bp){this.map[key]=bp}
  keys(){return Object.keys(this.map)}
  get(key){return JSON.parse(JSON.stringify(this.map[key]))}
};
