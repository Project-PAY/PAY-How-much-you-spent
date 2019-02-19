import * as React from 'react';
import Main from '../components/Main/Main';
import {connect} from 'react-redux';
import IBase from 'src/@types/models/base';

interface IStateToProps {
  baseInfo: IBase;
}

const mapStateToProps = ({payInitial: baseInfo}) => ({
  baseInfo
});

class MainContainer extends React.Component<IStateToProps> {
  render() {
    const {baseInfo} = this.props;

    return (
      <Main baseInfo={baseInfo}/>
    );
  }   
}

export default connect(mapStateToProps, null)(MainContainer);