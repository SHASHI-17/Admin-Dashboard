import AdminSidebar from '../../components/AdminSidebar'
import { BarChart } from '../../components/Charts'


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

const BarCharts = () => {
  return (
    <div className="adminContainer">
        <AdminSidebar/>
      <main className='chart-container'>
            <h1>Bar Charts</h1>
            <section>
                <BarChart  
                data_1={[200,241,789,567,654,100,810]} 
                data_2={[789,465,120,890,39,780,899]} 
                title_1='Products' title_2='Users' 
                bgColor_1='hsl(260,50%,30%)' bgColor_2='hsl(360,90%,90%)' />
                <h2>Top SELLING PRODUCTS & TOP CUSTOMERS</h2>
            </section>
            <section>
                <BarChart  
                horizontal={true}
                data_1={[200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,]}
                data_2={[]} 
                title_1='Products' title_2='' 
                bgColor_1='hsl(180,40%,50%)' bgColor_2='' labels={months} />
                <h2>Order throughout the year</h2>
            </section>

      </main>
      </div>
  )
}

export default BarCharts