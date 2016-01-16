import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute } from 'react-router'
import Layout from 'lib-template/layout.jsx'
import ChartsPage from 'lib-template/charts-page.jsx'
import TextFieldsPage from 'lib-template/text-fields-page.jsx'
import DashboardPage from 'lib-template/dashboard-page.jsx'
import ChartJsPage from 'lib-template/chart-js-page.jsx'
import initTouchPlugin from 'react-tap-event-plugin'
import { createHistory } from 'history'
import LoginsPage from 'lib-template/logins-page.jsx'
import ButtonsPage from 'lib-template/buttons-page.jsx'
import ProgressBarsPage from 'lib-template/progress-bars-page.jsx'
import ProgressDecksPage from 'lib-template/progress-decks-page.jsx'
import SlidersPage from 'lib-template/sliders-page.jsx'
import CheckboxesPage from 'lib-template/checkboxes-page.jsx'
import PopoversPage from 'lib-template/popovers-page.jsx'
import DatepickerPage from 'lib-template/datepicker-page.jsx'
import DialogsPage from 'lib-template/dialogs-page.jsx'
import DropdownPage from 'lib-template/dropdown-page.jsx'
import FormPage from 'lib-template/form-page.jsx'
import TablePage from 'lib-template/table-page.jsx'
import LoginPage from 'lib-template/login-page.jsx'
import ImageGalleryPage from 'lib-template/image-gallery-page.jsx'
import Error404 from 'lib-template/error-404.jsx'
import IconsPage from 'lib-template/icons-page.jsx'
import SnackbarPage from 'lib-template/snackbar-page.jsx'
import AutocompletePage from 'lib-template/autocomplete-page.jsx'
import SignUpPage from 'lib-template/sign-up-page.jsx'

initTouchPlugin();

export default {
    run: () => {
        ReactDOM.render((
            <Router history={createHistory()}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={DashboardPage}/>
                    <Route name='charts' path="/charts" component={ChartsPage}/>
                    <Route name='textfields' path="/textfields" component={TextFieldsPage}/>
                    <Route name='buttons' path="/buttons" component={ButtonsPage}/>
                    <Route name='chartjs' path="/chartjs" component={ChartJsPage}/>
                    <Route name='progress' path="/progressBars" component={ProgressBarsPage}/>
                    <Route name='decks' path="/progressDecks" component={ProgressDecksPage}/>
                    <Route name='logins' path="/logins" component={LoginsPage}/>
                    <Route name='sliders' path="/sliders" component={SlidersPage}/>
                    <Route name='checkboxes' path="/checkboxes" component={CheckboxesPage}/>
                    <Route name='popover' path="/popovers" component={PopoversPage}/>
                    <Route name='datepicker' path="/datepicker" component={DatepickerPage}/>
                    <Route name='dialogs' path="/dialogs" component={DialogsPage}/>
                    <Route name='dropdown' path="/dropdown" component={DropdownPage}/>
                    <Route name='form' path="/form" component={FormPage}/>
                    <Route name='tables' path="/tables" component={TablePage}/>
                    <Route name='images' path="/images" component={ImageGalleryPage}/>
                    <Route name='icons' path="/icons/:category" component={IconsPage}/>
                    <Route name='snackbar' path="/snackbar" component={SnackbarPage}/>
                    <Route name='autocomplete' path="/autocomplete" component={AutocompletePage}/>
                    {/*<Route path="*" component={NoMatch}/>*/}
                </Route>
                <Route path="/login-page" component={LoginPage} />
                <Route path="/error-404" component={Error404} />
                <Route path="/sign-up-page" component={SignUpPage}/>
            </Router>
        ), document.getElementById('content'))
    }
}