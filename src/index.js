import React from 'react';
export default function NotFoundHandler() {
  return (
    <div className="not-found">
      <section className="not-found__wrap">
        <svg
          version="1.1"
          viewBox="0 0 1190 922"
          enableBackground="new 0 0 1190 922"
        >
          <g>
            <path
              className="not-found__path"
              fill="#B3B3B3"
              d={`M488.9,605.8h-94.4v167.5l-91.2,
                21.2V605.8H3.3V538l300-452.7h92.2v441h93.3V605.8zM303.4,
                526.3V194.5 L82.9,526.3H303.4z`}
            />

            <path
              className="not-found__path"
              fill="#FF0000"
              d={`M823.7,645.2c-127,145.2-306.6,163.7-483.1,9.4C171,506.2,
              159.5,320.7,286.6,175.4c127-145.3,309.7-159.3,481.3-9.2C942.3,
              318.8,950.8,500,823.7,645.2z M331.1,222.9c-66.5,76-75.7,198.7,
              68.5,324.9 C557.5,686,702.5,685.4,779.3,
              597.7c69.1-79,67.1-204.6-70.4-324.8C557.8,
              140.8,412.1,130.3,331.1,222.9`}
            />

            <path
              className="not-found__path"
              fill="#4D4D4D"
              d={`M1186.7,717.1h-129.5v169.3L932,915.5V717.1H520.2V624L932,
              2.6h126.6V608h128.1V717.1z M932,608V152.5 L629.3,608H932z`}
            />
          </g>

          <g display="none">
            <text
              className="not-found__svg-text"
              transform="matrix(1 0 0 1 287.6778 895)"
              fontFamily="'Georgia'"
              display="inline"
              fill="#FF0000"
            >
              Page not found
            </text>
          </g>
        </svg>
        <p className="not-found__text">
          We are unable to find the page you are looking for.
        </p>
        <p className="not-found__text">
          Try exploring the navigation links above to locate what you are
          after, or use the search box at the top of the page.
        </p>
      </section>
    </div>
  );
}
