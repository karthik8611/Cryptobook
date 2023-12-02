import  { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell } from 'recharts';
// Import your CSS file if not imported yet
import './postDataStyles.css';

const Data = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const filteredPosts = response.data.filter(post => post.userId === 1);
        setPosts(filteredPosts);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Calculate the number of posts written by user ID 1
  const totalPosts = posts.length;
  const postsByUser1 = totalPosts;

  // Pie chart data
  const pieData = [
    { name: 'User ID 1', value: postsByUser1 },
    { name: 'Other Users', value: totalPosts - postsByUser1 }
  ];

  // Colors for the pie chart
  const COLORS = ['#0088FE', '#FFBB28'];

  return (
    <div className="post-data">
      {/* Table */}
      <div className="table-container">
        <h2>Filtered Posts for User ID 1</h2>
        <table className="post-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie chart */}
      <div className="pie-chart-container">
        <h2>Pie Chart - Posts by User ID 1</h2>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            data={pieData}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {
              pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Data;
