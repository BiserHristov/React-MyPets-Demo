import { Component } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import * as petsService from '../../services/petsService'

import Pet from '../Pet/Pet'
import withRouter from '../withRouter'
import CategoryNavigation from './CategoryNavigation/CategoryNavigation'

class Categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pets: []
        }


    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({ pets: res }))
    }

    componentDidUpdate(prevProps) {
        let { category } = this.props.params;

        if (prevProps.params.category == this.props.params.category) {
            return
        }

        petsService.getAll(category)
            .then(res => {
                this.setState({ pets: res })
            })

    }

    render() {
        return (
            <>
                <section className="basic">
                    <h1> Welcome to pet my pet!</h1>
                </section>
                <section className="dashboard">
                    <h1>Dashboard</h1>

                    <CategoryNavigation />
                    {/* <Outlet /> */}

                    <ul className="other-pets-list">

                        {this.state.pets.map(p => <Pet
                            key={p.id}
                            pet={p}
                        />)}
                    </ul>
                </section>
            </>
        )
    }

}

export default withRouter(Categories)