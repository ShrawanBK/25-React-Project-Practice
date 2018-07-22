import React, { Component } from 'react';
import './App.css';

const names=[
"The Abyssinians",
"The Aces",
"Glen Adams",
"Admiral T",
"Yasus Afari",
"African Brothers",
"The Aggrovators",
"Aisha",
"Bobby Aitken",
"Laurel Aitken",
"Alaine",
"Alborosie",
"Dennis Alcapone",
"Alozade",
"Alpha & Omega",
"Roland Alphonso",
"Althea & Donna",
"Al Anderson",
"Lynford Anderson aka 'Andy Capp'",
"Bob Andy",
"Horace Andy",
"Mike Anthony",
"Patrick Andy",
"Anthony B",
"Apache Indian",
"Marlon Asher",
"Aswad",
"Audio Active",
"Baba Brooks",
"Baby Cham",
"Baby Wayne",
"Bad Brains",
"Admiral Bailey",
"Spanner Banner",
"Buju Banton",
"Burro Banton",
"Mega Banton",
"Pato Banton",
"Starkey Banton",
"Dave Barker",
"Aston Barrett",
"Carlton Barrett",
"Theophilus Beckford",
"Bedouin Soundclash",
"Beenie Man",
"Nayanka Bell",
"Lorna Bennett",
"Spragga Benz",
"Beshara",
"Big Joe",
"Big Mountain",
"Big Youth",
"Barry Biggs",
"Black Roots",
"The Black Seeds",
"Black Slate",
"The Blackstones",
"Black Uhuru",
"Everton Blender",
"Alpha Blondy",
"Blue Riddim Band",
"The Blues Busters",
"Yami Bolo",
]

class Search extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		input:'',
  		names:[]
  	}
  	this.handleChange=this.handleChange.bind(this)
  }
  handleChange(event){
  	const a=[];
  	names.map(name=>{
  		name.toLowerCase().includes(event.target.value.toLowerCase())?a.push(name):a;
  	})
  	this.setState({
  		input:event.target.value,
  		names:a
  	})
  }
  componentWillMount(){
  	this.setState({
  		names:names
  	})
  }
  render() {
    return (
      <div className="search">
        <h2>Search:</h2>
        <input placeholder="Search the list with React" type="text" onChange={this.handleChange}/>
        <ul>
        {
        	this.state.names.map((name,i)=>(
        		<li key={i}>{name}</li>))
        }   
        </ul>   
      </div>
    );
  }
}

export default Search;
