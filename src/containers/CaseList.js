import React, { Component } from 'react';
// import adapter from '../adapters/adapter';
import CaseCard from '../components/CaseCard'
import { connect } from 'react-redux'


class CaseList extends Component {
  // componentDidMount() {
  //   this.props.getCases()
  // }

  filteredByGender = () => {

  }

  render() {
    return (
      <div className="case-card">
        <ul>
          {/* caseCards */}
        </ul>
      </div>

    )
  }

}

// export default CaseList;

const mapStateToProps = state => ({cases: state.cases})
// const mapDispatchToProps = dispatch => ()

export default connect(mapStateToProps)(CaseList)
