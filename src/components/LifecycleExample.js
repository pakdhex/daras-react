import React, { Component } from 'react';

class LifecycleExample extends Component {
  componentDidMount() {
    console.log('Component is mounted'); 
    //Dipanggil setelah komponen pertama kali dirender di DOM. 
    //Berguna untuk melakukan pengambilan data atau setup awal.
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    //Dipanggil setiap kali komponen diperbarui. 
    //Berguna untuk menanggapi perubahan state atau props.
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    //Dipanggil sebelum komponen dihapus dari DOM. 
    //Berguna untuk membersihkan sumber daya atau melakukan tugas terakhir.
  }

  render() {
    return <p>Component Lifecycle Example</p>;
  }
}

export default LifecycleExample;
