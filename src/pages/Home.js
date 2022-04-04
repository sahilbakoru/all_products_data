import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';


function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "mechanicsbay_barcodes");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);


  console.log(postLists);
  const deletePost = async (id) => {
    const postDoc = doc(db, "mechanicsbay_barcodes", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      <button style={{backgroundColor:"#F4A340"}}>
      <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                    </button>
          <div>
                <table id="table-to-xls" >       
                    <tr>
                        <th style={{paddingRight:"10%" , textAlign:"left"}}>product</th>
                        <th style={{padding:"10%"}}>barcode</th>
                    </tr>           
                    {postLists.map(post1=>  
                    <tr >
                        <td style={{paddingRight:"10%"}}>{post1.key}</td>
                        <td style={{padding:"10%"}} >{post1.value}</td>
                    </tr>  
                    )}
                </table>
        
            </div>
        
      
    </div>
  );
}

export default Home;
