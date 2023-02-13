import React from "react";
import Navigation from "../common/navigation/Navigation";
import Main from "../common/layout/Main";
import gifError from "../res/gif/error404.gif";

const ErrorPage = (props) =>          (
    <React.Fragment>
        <Navigation />
        <Main class="error-page">
            <h2>Erro 404!</h2>
            <div className="row pb-4">
                <div className="col-12">
                    <p> A página não foi encontrada.</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <img src={gifError} style={{ maxWidth: "300px"}} />
                </div>
            </div>
        </Main>
    </React.Fragment>
);

export default ErrorPage;