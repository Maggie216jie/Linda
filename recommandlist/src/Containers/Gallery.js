import React, { Component } from 'react';
import GalleryItem from '../Componnets/GalleryItem';
import { connect } from 'react-redux';
import { getData, addtoMylist, removefromMylist } from '../actions';

class Gallery extends Component {

    componentDidMount(){
        this.props.getData();
    }

    renderMylist = () =>{

        let mylist =[];
        if(this.props.listdata.mylist){

           mylist = [...this.props.listdata.mylist];

        }

        return mylist.map(item =>{
            return <GalleryItem key={item.id}  clickfun={this.props.removefromMylist} id={item.id} title={item.title} imgurl={item.img} listname="mylist" />

        })

    }

    renderMylistTitle = () =>{

        let mylist =[];
        if(this.props.listdata.mylist){

           mylist = [...this.props.listdata.mylist];

        }

        return mylist.map(item =>{
            return (<span className="mylisttiltespan" key={item.id}>{item.title}</span>)
        })

    }

    renderRecommandList = () =>{

        let recommendlist =[];
        if(this.props.listdata.recommendations){

            recommendlist = [...this.props.listdata.recommendations];

        }

        return recommendlist.map(item =>{
            return <GalleryItem key={item.id} clickfun={this.props.addtoMylist} id={item.id} title={item.title} imgurl={item.img} listname="recommendlist" />

        })

    }


    render() {

       //console.log(this.props.listdata)
        return (
            <div className="gallerycontainer">
                <div className="titlepart">My List</div>
                <div className="listpart">
                   
                    {this.renderMylist()}
                </div>

                <div className="titlepart">Recommend List</div>
                <div className="listpart">
                    {this.renderRecommandList()}
                </div>

                <div className="titlepart">My List Title</div>
                <div className="listpart">
                    {this.renderMylistTitle()}
                </div>
            </div>
        );
    }

    
}

const mapStateToProps = state =>{
    return {
        listdata: state.origindata,
    
    }
}

export default connect(mapStateToProps, {getData, addtoMylist, removefromMylist})(Gallery);