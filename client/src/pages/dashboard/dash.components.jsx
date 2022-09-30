import React from 'react'
// import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import {connect} from 'react-redux'

import Layout from '../../components/layout/layout'
import DashSearch from './dashSection2/dashSearch';
import DashCardList from './dashSection3/dashCardList';
import Payments from '../../components/stripe/Payments'

import './dash.styles.scss'
import SubHeader from '../../components/subHeader/subHeader.component';

const Dashboard = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>TNEB Matrimony | Dashboard | Sai Matrimony</title>
      </Helmet>
      <SubHeader heading='Dashboard'/>
      <div className="container">
        <DashSearch/>
        <h2 className="ui header">
            All Users
        </h2>
        <div className="ui divider"></div>
        <DashCardList/>
      </div>
        <Payments/>
        <p>Credits {props.auth.credits}</p>
    
    </Layout>
  )
}

const mapStateToProps = (state)=>{
    return { auth : state.auth}
  }

export default connect(mapStateToProps)(Dashboard)