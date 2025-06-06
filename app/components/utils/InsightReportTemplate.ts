interface Insights {
  peakDay: string;
  peakDayValue: number | string;
  totalFootTraffic: number | string;
  topAisle: string;
  topAisleValue: number | string;
  longestDwellZone: string;
  longestDwellTime: number | string;
  totalDwellTime: number | string;
  averageDwellTime: number | string;
  peakDayPercent: number | string;
  topAislePercent: number | string;
  zoneEngagementRate: number | string;
  customerFlowEfficiency: number | string;
  conclusions: string[];
  recommendations: string[];
}

const HTMLTemplate = ({
  insights,
}: {
  insights: Insights;
}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module" src="app/components/utils/insightsReport.ts"></script>
    <title>Retail Insight Report</title>
    <style>
      body {
        font-family: 'Georgia', serif;
        font-size: 16px;
        background-color: #f6f6f6;
        padding: 0;
        color: #044F6C;
        max-width: 1220px;
        margin: auto;
        padding: 50px 0 50px 0;
      }
      header {
        text-align: center;
      }
      header p {
        margin-bottom: -15px;
      }
      header h1 {
        font-style: italic;
        font-weight: normal;
        color: #0B698B;
      }
      header h1 strong {
        font-style: normal;
        color: #0396A6;
      }
      section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }
      .card {
        background-color: #fff;
        border-radius: 12px;
        padding: 20px;
        width: 250px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        margin-top: 20px;
      }
      .card:hover {
        box-shadow: 0 8px 12px #9CD3D8;
      }
      .card h2 {
        font-size: 18px;
        margin-bottom: 10px;
      }
      .highlight {
        color: #0396A6;
        font-weight: bold;
        font-size: 20px;
      }
      .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }
      .section-title {
        width: 100%;
        text-align: center;
        font-size: 24px;
        padding: 0 20px;
      }
      .section-title h4 {
        font-style: italic;
        font-weight: normal;
        color: #0B698B;
      }
      .section-title h4 strong {
        font-style: normal;
        color: #0396A6;
      }
      .stat-block {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        width: 70%;
        padding: 40px 20px;
        background-color: #fff;
        color: #033e3e;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
      }
      .stat-block:hover {
        box-shadow: 0 8px 12px #9CD3D8;
      }
      .stat-block strong {
        color: #0396A6;
        font-size: 20px;
        display: block;
        margin-bottom: 15px;
      }
      .container {
        display: flex;
        gap: 20px;
        width: 75%;
        margin: auto;
      }
      .stat-boxes {
        gap: 20px;
        display: flex;
        flex-direction: column;
        flex: 1;
        border-radius: 12px;
        padding: 20px;
        text-align: center;
      }
      .stat-box {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        align-content: center;
        justify-content: center;
        text-align: center;
      }
      .stat-box:hover {
        box-shadow: 0 8px 12px #9CD3D8;
      }
      footer {
        text-align: center;
        font-size: 12px;
        color: #999;
        padding: 40px 0;
      }


      .tooltip {
        position: relative;
        display: inline-block;
        cursor: pointer;
        font-size: 0.9rem;
        margin-left: 6px;
        font-style: normal;
      }
      .tooltip .tooltip-text {
        visibility: hidden;
        width: 315px;
        background-color: #f6f6f6;
        color: #044F6C;
        text-align: left;
        border-radius: 6px;
        padding: 20px;
        position: absolute;
        z-index: 1;
        top: 110%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.85rem;
        line-height: 1.4;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
      }
      .tooltip:hover .tooltip-text {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.3s ease;
      }        
    </style>
    </head>
    <body id="insight-report">
    <hr>
    <header>
        <p>Retail Analytics</p>
        <h1><span>Insight</span> <strong>Report</strong></h1>
    </header>

    <section>
        <div class="card">
        <h2 class="highlight">${insights.peakDay}</h2>
        <p>Day with the most foot traffic</p>
        </div>
        <div class="card">
        <h2 class="highlight">${insights.peakDayValue}</h2>
        <p>Highest foot traffic in a day recorded</p>
        </div>
        <div class="card">
        <h2 class="highlight">${insights.totalFootTraffic}</h2>
        <p>Total foot traffic recorded<br>during the monitoring period</p>
        </div>
    </section>

    <div class="section-title"><h4>Zone-based <strong>Foot Traffic and Dwell Time</strong></h4></div>
    <section>
        <div class="stat-block">
        <div><strong>${insights.topAisle}</strong>is the zone with the most foot<br>traffic with <span>${insights.topAisleValue}</span> entries recorded.</div>
        <div><strong>${insights.longestDwellZone}</strong>is the zone with the longest dwell<br>time, totaling <span>${insights.longestDwellTime}</span> minutes.</div>
        </div>
        <div class="stat-block">
        <div><strong>${insights.totalDwellTime} minutes</strong>Total customer dwell time across all zones</div>
        <div><strong>${insights.averageDwellTime} minutes</strong>Average customer dwell time across all zones</div>
        </div>
    </section>

    <div class="section-title"><h4>More <strong>Statistics</strong></h4></div>
    <section>
        <div class="stat-block">
        <div><strong>${insights.peakDayPercent}%</strong>On average, of the total traffic<br>occurred on <span>${insights.peakDay}</span></div>
        <div><strong>${insights.topAislePercent}%</strong><span>${insights.topAisle}</span> accounted for this amount of total entries,<br>highlighting it as a high-engagement area.</div>
        </div>
        <div class="stat-block">
        <div><strong>${insights.zoneEngagementRate}%</strong>Zone engagement rate or<br>the average visits per zone</div>
        <div><strong>${insights.customerFlowEfficiency}%</strong>Customer flow efficiency of zones<br>visited per total possible zones</div>
        </div>
    </section>

    <div class="section-title">
      <h4>
        Our <strong>Conclusions</strong>
        <span class="tooltip">
          ⓘ
          <span class="tooltip-text">
            <strong>Why is the store flagged?</strong><br><br>
            - <strong>Foot Traffic:</strong> Less than 50 visitors/day is below average for small-medium stores <a href="https://bplan.ai/blogs/kpi-metrics/in-store-marketing-agency-kpi-metrics">(BPlanAI, 2025)</a>.<br>
            - <strong>Dwell Time:</strong> Less than 10 mins suggests weak customer engagement <a href="https://www.counttrack.com/blog-and-news/dwell-time-understanding-customer-behavior-and-increasing-sales-in-retail">(CountTrack, 2025)</a>.<br><br>
            These thresholds are based on industry benchmarks and help guide layout and marketing decisions.
          </span>
        </span>
      </h4>
    </div>
    <section>
      ${insights.conclusions.map((rec: string) => `
        <div class="stat-block">
          <div>${rec}</div>
        </div>
      `).join("")}
    </section>

    <div class="section-title">
      <h4>
        Our <strong>Recommendations</strong>
        <span class="tooltip">
          ⓘ
          <span class="tooltip-text">
            <strong>Why is the store flagged?</strong><br><br>
            - <strong>Foot Traffic:</strong> Less than 50 visitors/day is below average for small-medium stores <a href="https://bplan.ai/blogs/kpi-metrics/in-store-marketing-agency-kpi-metrics">(BPlanAI, 2025)</a>.<br>
            - <strong>Dwell Time:</strong> Less than 10 mins suggests weak customer engagement <a href="https://www.counttrack.com/blog-and-news/dwell-time-understanding-customer-behavior-and-increasing-sales-in-retail">(CountTrack, 2025)</a>.<br><br>
            These thresholds are based on industry benchmarks and help guide layout and marketing decisions.
          </span>
        </span>
      </h4>
    </div>
    <section>
      ${insights.recommendations.map((rec: string) => `
        <div class="stat-block">
          <div>${rec}</div>
        </div>
      `).join("")}
    </section>

    <footer>
        Disclaimer: The insights and recommendations provided are based on the available data and may not fully capture the complete customer behavior patterns. Limited input data can affect the accuracy and<br>reliability of the analysis. For more precise and comprehensive results, we recommend supplying additional video tracks to allow for a broader and deeper extraction of customer behavior for analytics.
    </footer>
    <hr>
    
    <script>
      function toggleThresholdInfo() {
        const content = document.getElementById("thresholdInfo");
        content.classList.toggle("show");
      }
      
      setTimeout(() => {
        window.print();
      }, 5000);
    </script>
    </body>
    </html>
    `;
};

export { HTMLTemplate };
