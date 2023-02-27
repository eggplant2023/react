import React, {Componet, useState, useEffect} from 'react';




const GetProductInfo = (modelList, categoryList) => {



    return (
        <div>
              <table className="Models">
                <thead>
                    <tr>
                        <th>카테고리</th>
                        <th>모델</th>
                    </tr>
                </thead>
                <tbody>
                    {   modelList &&
                        modelList.map(
                            (modelList) =>
                            <tr key = {modelList.model_name}>
                                <td>{modelList.category_name}</td>
                                <td>{modelList.model_name}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>  
        </div>
    );
}

export default GetProductInfo;