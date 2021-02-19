import React, { Component } from 'react'
import prostars from './prostars.json';
import './Stardom.css';

class Stardom extends Component {
    constructor(){
        super();
        this.state = {
            prostar :[prostars[0],prostars[1],prostars[2],prostars[3],prostars[4]]
        };
    }
    
    ProstarDetails = () =>{
        const data = this.state.prostar;
        const mapRow = data.map(prostar => (
            <tr key={prostar.id}>
                <td><img className="image" src={prostar.pictureUrl } alt={prostar.pictureUrl} /></td>
                <td>{prostar.name}</td>
                <td>{prostar.popularity}</td>
                <td><button className="delete">Delete</button></td>
            </tr>  
        ));
        return mapRow;
    }
    
    addRandomProstar=()=>{
        let randomStars= prostars.slice(5,prostars.length);
        const value = Math.floor(Math.random() * randomStars.length);
        this.setState( {
             prostar:this.state.prostar.concat(randomStars[value])
            });
    }

    sortByName=()=> {
        var newData=this.state.prostar;
        newData.sort((person1,person2)=> {  

        let obj1 = person1.name.toLocaleLowerCase()
        let obj2 = person2.name.toLocaleLowerCase()
      
        if (obj1 < obj2) {
          return -1;
        }
        if (obj1 > obj2) {
          return 1;
        }
        return 0;
        
    });
    this.setState({prostars:newData});
   }

    sortByPopularity=()=>{
        var newData=this.state.prostars;
        newData.sort((person1,person2) => {
            const obj1=person1.popularity;
            const obj2=person2.popularity;
            if (obj1 < obj2) {
                return 1;
            }
            else if (obj1 > obj2) {
                return -1;
            }
            return 0;
        });
        this.setState({prostars:newData});
    }

    render() {
        return (
            <div>
                <h1 className="Title">ProStar</h1>
                <div className="body">
                <div className="button">
                    <button className="addstar" onClick={this.addRandomProstar}>Get Random Contact</button>
                    <button className="sortbyname" onClick={this.sortByName}>Sort By Name</button>
                    <button className="sortbypopularity" onClick={this.sortByPopularity}>Sort By Popularity</button>
                </div>
                <center>
                <table className="table">
                        <thead className="tablehead">
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.ProstarDetails()}
                        </tbody>
                </table>
                </center>
                </div>
            </div>
        );
    }
}

export default Stardom;
 