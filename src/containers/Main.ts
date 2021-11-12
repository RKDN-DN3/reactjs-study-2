import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as TodoActions from '../actions/RouteAction';
import Main from '../components/Main';

const select = (state:any) => ({
    valueState: state.todos,
});

const mapDispatchToProps = (dispatch: any) => ({
    activeTodo: bindActionCreators(TodoActions.activeTodo, dispatch),
});

const MainPage = connect(
    select,
    mapDispatchToProps,
)(Main);

export default MainPage;
