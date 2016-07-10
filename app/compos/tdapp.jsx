var React = require("react"),
    Todos = require("todos"),
    Add2do = require("addTD"), 
    SearchTD = require("searchTD")
var main2do = React.createClass({
    getInitialState: function(){
      return{
          todos: [
              {id: 1, txt: 'find land'},
              {id: 2, txt: 'get tool'},
              {id: 3, txt: 'cut logs'},
              {id: 4, txt: 'prep ground'},
              {id: 5, txt: 'get dog team'},
              ],
            shocomp: false,
            searchtxt: ''
      }  
    },
    handAdd2do: (txt) => { //static version that pretends to add state to make sure add form works
       alert('new 2do' + txt)
    },
    handSearch: function  (shocomp, searchtxt)  {
        console.log(shocomp, searchtxt)
        this.setState({
            shocomp: shocomp,
            searchtxt: searchtxt.toLowerCase()
        })
    },
    render: function(){
        //console.log('in tdapp', this.handAdd2do)
        var {todos} = this.state
    return(
        <div>
            <SearchTD onSearch ={this.handSearch}/>
            <Todos todos={todos}/>
            <Add2do handAdd2do={this.handAdd2do}/>
        </div>
        )
        
    }
})


module.exports = main2do