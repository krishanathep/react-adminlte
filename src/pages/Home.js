import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Home</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  {/* <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li> */}
                  <li className="breadcrumb-item active">Home</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Title</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                      title="Collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                      title="Remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <h3>Hello Home</h3>
                </div>
                <div className="card-footer">Footer</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
