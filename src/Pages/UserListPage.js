import React from "react";

const UserListPage = () => {
  return (
    <>
      <div className="user-list">
        <div className="container">
          <div className="user-list-wrapper">
            <div className="user-list-header">
              <h2 className="section-title">User wallet Address List</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, praesentium.
              </p>
            </div>
            <div className="user-list-content">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">User Wallet Address</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserListPage;
