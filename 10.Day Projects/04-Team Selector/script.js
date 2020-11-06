const team = {
  _position:{
      centers:[],
      forwards:[],
      guards:[]
  },
  get centers(){
      return this._position.centers;
  },
  get forwards(){
      return this._position.forwards;
  },
  get guards(){
      return this._position.guards
  },
  set centers(val){
      this._position.centers = val;
  },
  set forwards(val){
       this._position.forwards = val;
  },
  set guards(val){
      this._position.guards = val;
  },
  get position () {
      return {
        centers: this.centers,
        forwards: this.forwards,
        guards: this.guards
      }
  },
  addPlayerToPosition(positionName, playerName,playerPoint) {
let team = { 
  name:playerName,
  point:playerPoint
}
this.position[positionName].push(team);
  },
  getRandomPlayerFromPosition(positionName){
const p = Math.floor(Math.random()*this.position[positionName].length)
return this.position[positionName][p];
  },
  generateRandomTeam(){
      const tm = {
          centers:this.getRandomPlayerFromPosition('centers'),
          forwards:this.getRandomPlayerFromPosition('forwards'),
          guards:this.getRandomPlayerFromPosition('guards')
      }
      const total = tm.centers.point + tm.forwards.point + tm.guards.point;
      const avaragePoint = total / 3;
      return `We selected ${tm.centers.name} from centers,
      ${tm.forwards.name} from forwards and ${tm.guards.name} from guards. The avarage point is ${avaragePoint.toFixed()}. Good luck` 
  }
}
team.addPlayerToPosition('centers', 'Bam Adebayo', 6.25);
team.addPlayerToPosition('centers', 'Ali Aliyev', 4.50);
team.addPlayerToPosition('centers', 'Veli Veliyev', 5.15);
team.addPlayerToPosition('centers', 'Tom Bayramov', 6.23);
team.addPlayerToPosition('centers', 'Mesut Annamov', 6.05);
team.addPlayerToPosition('forwards', 'Hakan Sukur', 5.75);
team.addPlayerToPosition('forwards', 'Arda', 6.25);
team.addPlayerToPosition('forwards', 'Messi', 5.35);
team.addPlayerToPosition('forwards', 'Feyyaz', 5.25);
team.addPlayerToPosition('forwards', 'Sergen', 4.95);
team.addPlayerToPosition('guards', 'Ronaldo', 6.25);
team.addPlayerToPosition('guards', 'Maradonna', 7.10);
team.addPlayerToPosition('guards', 'David Bekham', 6.45);
team.addPlayerToPosition('guards', 'Mike Morgan', 5.80);
team.addPlayerToPosition('guards', 'Trump Donald', 5.60);
console.log(team.generateRandomTeam());