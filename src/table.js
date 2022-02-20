
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import IconButton from '@mui/material/IconButton';
// import AddIcon from '@mui/icons-material/Add';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';

     
// class Table extends Component {
//   constructor() {
//     super();
//     this.state = {
//       categories: [
//         {id: 1, value: "SelectAll"},
//         {id: 2, value: "Company"},
//         {id: 3, value: "Status"},
//         {id: 4, value: "React"}
//       ],
//       selCategories: 'php'
//     };
       
//     window.onmousedown = function(e) {
//       var el = e.target;
//       if (el.tagName.toLowerCase() == 'option' && el.parentNode.hasAttribute('multiple')) {
//         e.preventDefault();
    
//         // toggle selection
//         if (el.hasAttribute('selected')) el.removeAttribute('selected');
//         else el.setAttribute('selected', '');
//       }
//     }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }


     
//   handleChange(event) {
    
//     const selected=[];
//     let selectedOption=(event.target.selectedOptions);
 
//     for (let i = 0; i < selectedOption.length; i++){
//         selected.push(selectedOption.item(i).value)
//     }
  
//     this.setState({selCategories: selected});
//   }
      
//   handleSubmit(event) {
//     console.log(this.state);
//     event.preventDefault();
//   }
      
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//         {/* <label>
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="Select all"><CheckBoxIcon/> Select all</option>
//               <option value="DC United">DC United</option>
//               <option value="Manchester United">Manchester United</option>
//               <option value="LA Galaxy">LA Galaxy</option>
//             </select>
//           </label> */}
            
//           {/* <strong>Select Category:</strong> */}
//           <select multiple onChange={this.handleChange.bind(this)}>
//            {
//             this.state.categories.map(item => (
//                <option value={item.id}><IconButton><AddIcon/></IconButton>{item.value}</option>
//              ))
//           }
//           hello
//           </select>
//         </form>
//       </div>
//     );
//   }
// }

// export default Table;
    
















// // import React from "react";
// // import Checkbox from '@mui/material/Checkbox';



// // class Table extends React.Component {
// //     constructor(props) {
// //       super(props);
// //       this.state = {value: 'coconut'};
// //       this.handleChange = this.handleChange.bind(this);
// //       this.handleSubmit = this.handleSubmit.bind(this);
// //     }
  
// //     handleChange(event) {    this.setState({value: event.target.value});  }
// //     handleSubmit(event) {
// //       alert('Your favorite flavor is: ' + this.state.value);
// //       event.preventDefault();
// //     }

    
// //     render() {
// //       return (
// //           <>
// //         <form onSubmit={this.handleSubmit}>
// //           <label>
// //             <select value={this.state.value} onChange={this.handleChange}>
// //               <option><input type="checkbox" id="first" value="Select all" />Select all</option>
// //               <option value="DC United">DC United</option>
// //               <option value="Manchester United">Manchester United</option>
// //               <option value="LA Galaxy">LA Galaxy</option>
// //             </select>
// //           </label>
// //           {/* <input type="submit" value="Submit" /> */}
// //           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
// //           <label>
// //             <select value={this.state.value} onChange={this.handleChange}>            
// //               <option value="Select all">Status</option>
// //               <option value="DC United">Active</option>
// //               <option value="Manchester United">Closed</option>
// //               <option value="LA Galaxy">Active</option>
// //             </select>
// //           </label>
// //         </form>
// //         </>
// //       );
// //     }
// //   }
  
// // export default Table;