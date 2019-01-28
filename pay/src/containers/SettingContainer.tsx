import * as React from 'react';
import Setting from '../components/Setting/Setting';
import {connect} from 'react-redux';
import * as settingAction from '../store/modules/payInitial';
import {Dispatch} from 'redux';
import IBase from 'src/@types/models/base';

interface IProps {
  registerBaseInfo: typeof settingAction.registerBaseInfo
}

class SettingContainer extends React.Component<IProps> {
  registerBaseInfo = (containerState: IBase) => {
    this.props.registerBaseInfo(containerState);
  }

  render() {
    return (
      <Setting registerBaseInfo={this.registerBaseInfo}/>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  registerBaseInfo: (args: IBase) => {
    dispatch(settingAction.registerBaseInfo(args));
  }
});

export default connect(null, mapDispatchToProps)(SettingContainer);