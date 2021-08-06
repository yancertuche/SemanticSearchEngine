import React, {Component} from 'react';

import {I18nProvider} from '../i18n';
import '../Styles/DashboardStyles.css';
import ReactWordcloud from 'react-wordcloud';
import DonaNumInstances from '../Components/DonaNumInstances';
import HbarBenefits from '../Components/HbarBenefits';
import DonaDomainCompany from '../Components/DonaDomainCompany';
import BarTeamByCompany from '../Components/BarTeamByCompany';
import CloudOfCompany from '../Components/CloudOfCompany';
import HbarChallenges from '../Components/HbarChallenges';


export class Dashboard extends Component {

    render(){
        return (
            <I18nProvider locale={this.props.la}>
                <div className="Dash-container">
                    <div className="top-container">
                        <div className="each-container">
                            <div className="G-container">
                                <HbarBenefits  la={this.props.la} ></HbarBenefits>
                            </div>
                        </div>
                        <div className="each-container">
                            <div className="G-container">
                                <BarTeamByCompany la={this.props.la}></BarTeamByCompany>        
                            </div>
                        </div>
                        <div className="each-container">
                            <div className="G-container">
                                <DonaDomainCompany la={this.props.la}></DonaDomainCompany>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="each-container">
                            <div className="G-container">
                                <CloudOfCompany la={this.props.la}></CloudOfCompany>
                            </div>
                        </div>
                        <div className="each-container">
                            <div className="G-container">
                                <DonaNumInstances la={this.props.la}></DonaNumInstances>
                            </div>
                        </div>
                        <div className="each-container">
                            <div className="G-container">
                                <HbarChallenges la={this.props.la}></HbarChallenges>
                            </div>
                        </div>
                    </div>
                </div>
                
                    
                       

    

                    
                
            </I18nProvider>
        )
    }
}