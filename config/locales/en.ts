export default {
  title: 'Douglas Tofoli',
  designation: 'Software Engineer',

  email: {
    text: 'email',
    email: 'contact@douglastofoli.dev',
  },

  meta: {
    title: 'Douglas Tofoli',
    description: 'teste',
    ogImage: '',
  },

  navbar: {
    paths: [
      {
        name: 'About',
        path: '/about',
      },
      {
        name: 'Projects',
        path: '/projects',
      },
      {
        name: 'Experiences',
        path: '/experiences',
      },
      {
        name: 'Blog',
        path: '/blog',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
    ],

    theme: {
      light: {
        label: 'Switch to dark theme',
      },
      dark: {
        label: 'Switch to light theme',
      },
    },

    language: {
      en: {
        label: 'Switch to portuguese',
      },
      br: {
        label: 'Switch to english',
      },
    },
  },

  hero: {
    textHighlight: [
      {
        word: 'Developer.',
        color: '#3b82f6',
      },
      {
        word: 'Backend.',
        color: '#f59e0b',
      },
      {
        word: 'Frontend.',
        color: '#10b981',
      },
      {
        word: 'Database.',
        color: '#84cc16',
      },
    ],
  },

  about: {
    title: 'About Me.',
    subtitle: `My name is Douglas Tofoli and I'm a Software Engineer. Currently working on`,
    description: [
      `I'm a passionate Software Engineering student with a focus on backend software development. For the past few years, I have been working with object-oriented programming in PHP and functional programming with Elixir. I enjoy both languages and love exploring their possibilities.`,
      `I strive to apply clean code concepts and follow best practices in all the code I develop, ensuring a solid and high-quality foundation.`,
      `In addition to my involvement in the field of Software Engineering, I dedicate a few hours every week to share interesting knowledge through my blog. I cover a variety of programming topics, sharing insights, tutorials, and reflections on the technologies and concepts I encounter during my learning journey.`,
      `I invite you to follow my blog, where I aim to provide quality content for programming enthusiasts, students, and professionals in the field. I'm excited to share my experiences and continue learning together with all of you.`,
    ],
    contact: {
      title: 'Contact',
      description: [
        'Feel free to reach out to me via',
        'for any matter. I try to answer as soon as possible.',
      ],
    },
    jobOpportunities: {
      title: 'Job Opportunities',
      description: [
        `I'm currently on the lookout for job opportunities. If my profile seems like a good fit, feel free to check out my`,
        `and drop me a message. I'm excited to connect and explore potential collaborations!`,
      ],
      description2: ['I’m not currently taking any new work at the moment.'],
    },
    socialLinks: 'Social Links',
    currentProjectName: 'This Website',
    currentProjectUrl: 'https://github.com/douglastofoli/douglastofoli.dev',
    resumeUrl: 'https://linkedin.com/in/douglastofoli',
  },

  projects: {
    title: 'Projects',
    projects: [
      {
        title: 'Test',
        imageSrc:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUREhIVFRUSGRsVEBYVGBcVGxYXGhYYFhYaFRcZHCggGBslIBYYIjIhJSkrLi4vFx8zODMuNygtLisBCgoKDg0OGxAQGzImICUvMC0tLS0uKy8tLS8tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAFAQAAEEAAMFBAQJBwgHCQAAAAEAAgMRBBIhBRMxQVEGImFxMlKBkRQVIzNCkpOx0lNVY3KUodMHFjRDdLLR4VRic4LBwvAkNUWks7TD4/H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMREAAgECBAMGBwADAQEAAAAAAAECAxESITHwBEFRYYGRscHREyIycaHh8RQjkjMV/9oADAMBAAIRAxEAPwC8REX0J8yEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARFlAYRRZMe0GtT5KTFIHCwgTTMoiIAiIgCIloAirZdoG+6BXjzUvCYjOOhHFGrEKSbsb0REJCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiLEsgaLPAIDKPFg100UZmPaSRr/AKvipSBNM5SbGPa57RHe7ALjmDdCL4EeB9yudhuLo85FZgDXTSz96oO0DHNxEluDGyxtYPm7I71kZpRzc7WvZpZ6rAMLYmBwohozCgNeegJH7yqRnik1vU0lSUYp+/Q3KJLtFrZ2QFr8z2lwIa4tFFo41X0uPLS6sXLWa5qzvyKq3MLCKLtJ9Nqjrz5DVSVbsiQHiy3mNSF6IsUqqTDkMD82p4+3xU/Bvtg0IrTXy5eClohSzzOYxudssjc5YI4xIAGtNjvXqR/q/vV5sCN25a5/pOY2+Wta/vJVftrYzpJjI1peHNDSLoCtKNyNu/crvDsEMQDnCmN1cdAAOZsmh5lZRk8TujWUY4VZr7WS/puUODGl0z4t24BgBDzVG78fDT28OfrGY3d5A1jpDJeUMycALJtzgK9q2YXFNkjZINBKA5gdQPeGYDzr7lLd3ZPe2iqWV2td+jLbZeyZMReSg0aFx4X0HUrbtTYcuHbmNObwLm3p5g8FOwO13QYOPcxNle6bclrpN0AX5i1znZXaXlbw5+FLfLtmSSPFR4iBsTog1oyy70OdICWj0G0QMhPHj0FnhlxNRVsKWV7W3zPQjwtN0Mbedr33yOWWFlYXonnBZRaJIDPIzDgWJPTBY4hzT3aEgIDHAkHrXLmqydkTFXdjz8MBNNaXVmBrQBzK7pvgTeh4LAxgFBzXNzZALFguffdFcSK15LrNl4OSYvGGeIIY3Oi3+Rsk00jDlkMe8tkcbXBzdWuLi08BRd0O0tlxztIcAHcnjQj28/JcP+cr9nd5fs7/AP58sN759P3+rHzxYWiPDmCR+HIoR6MAY4BrR3aMhJD3EgnrR4c1vXfF3VzgkrOwREUlQiIgCIiAIiIAiLKAwiIgCjbQYS3S/Ic9RxUlEDzKp7swa0MLcpAJA4claMFCrvxQNA5ceKqu0cj2xtyOItwBA4kn0QNQTqPRHE1ZAtROeFXJpwvK19S4UHF4t7JI2Nic9rzTnDLTdD1Phflw10VcHz4cRvkkMjnkMMOjiRy3ZAGZ41LjoCL4ABWWH2lE92QOp/qPBZJ9V1E+YVMV8tGXw2ztdd+9e7tJirdoYg5soNAca581ZLnu1sTKje+q3rQQed237nH3K7lhVyijiaRMwWIcHBpJIOmqscRFnbluuq57svAwySuZQa17Q0Dpu9D7957ld7TxD44nvjYXuaCWtHPTpxPkNeiOeWIKDvh+2uRoGz9SLNfRT4xA7kbHzFmjjEG0CNCMziG34A6JtSZ24FWx0pZFxFs3r2sJsaWA4140ut2dhY8HDhwMOHSySbvCMa/KD8k6W3ng0BkbzwJ4aWVjWr4FnvxNuH4fG7Lfh+Ffqcvh9otc4Mc10bzqGyii7rlIJa72EqHt6RjssQIdIJI3CPiHd4fOj8nVu/3QeVLptvbPjxeC38Mbo7fJvCXW6GaOQxWNSDlka7UaGuhXJCd2WHFMe4OxG5zQ1GQ+wM2Xu5gQ0uPGu7qqKp8SGW9+uheVF052ev437am2WKKB5bBCXTZbBa0O3bXE16b2hrSQe4CLo6KoeyIxSfJta9oBsZmtY3ehsskUZPyUjCLIHRpsgroZ4ZWSOkiDHh4Ae17iyi2wC1wa7rRFclGnY7DxOlOUyvd3n5e7HvXNB8d20NbfXKLrlaUX0ss+Xl270uRGemd3lzd+/s3qbNobRf8ABw7DSMeGyROc62vFxSslabBAzZmj6xGl2N2ytozYgzSSuBEsgkNANGcRsi0AedA2Nmnieq24HCmIOt2YvcXuNBupAGgH6qlKypJzU3qVdZqn8Nab9SPio5HVu5Gs62zPfT6QpaPg+I/Lx/Y//YpyLTCtt+5kpW/i9iq2PhZmSSl7hkc7uty5bd9J4GY5Q7pevGhetrs/ECHGxSONNIDbMpFm7psJ0JrMc3HSvLTisWyIAvdWY5W6E2aJoAAngCfYvIeyeMlj9DYD2VbTwNEg0eSphjhwXL4ndTttb/R3GJxeIgxDMJhMPA5hidK3eSvioiSngZY35rL2a6VmvXgtuy9p4t2Ldh8RDAwNiEtxSvlNuflaDmjZXov11vLy4LlIO1DGYjDl7JXPwwkilLWX8jK1rmm77xzwsHste5e0jZJ8S9kcrXTiKFjnMy1FG17nEm9DmleP3ryfgTx4e21z2v8AIhgx9l7cyFtHEtmxssjXAtbbbbKTRsOp0Q0BrKQ466+8teHiyNAsuIFFzqzOrm4gCyti9mCtGx4c3eTYREVigREQBERAEREAVRt+XKW2X5WxTSuDHujLjG1pALm61qferdUfabg7+zYn/wBNipU+nw8zSn9Xj5GpsLCOOI/asR+JZ3DOuI/asR+JGcB5LJWqpx6GDqS6niSOMAm8TpyGJxBPsGbVag+Muy1jfPfYmvfmpdUP5O5JWh5+DnMA7vCzw7t9zlZ95VBtzYbsCZGOxGHw4ij3sLSKE575c1nc75BbRa2iMwJ0IXLKvRXNb+9jsjw9drNP09fIknarWN7wprRVud95PEqNjnmdzDuJXwNuxowvdpkcGEglraPGtXAgaWrM9g8UxomeGzOoO0deTS/k2UB7rJ6lXOytkvxObIWjJV5iRxuqoHopdSEo4rq29SsadSEsNni8PC3Tr+NGcp2egIdJvQ7esIazO7OWQOGaNoPvBOpJYdTQUjbuKjawMexsjnkCNjhYskNzO0OVgJFu8RzV1tfsviopY5YY2yukBge1pIDbt7HyOI0Y0hwJFn5TQEqFB2NcSx7sS6QzyljhkLA+SHOS2zHbIQYnEAmjQ1ObXL48FHDFrfPM3/x6jljlF/b+aexo2ThXQsMbsxo3mc6w4nU5G2Sxg4AHpz4nZtLAidmU6UQWnU0Qb4Ai/wDoqT8Ckicd7Hu5HUZG5i4WNAWngRpxACmbP2dJiDUbdB6TjoB5n/gFv8ihnoc3zupl9XqVGzsDuQe8XE8TrwHAUXHxUxdOzsg6tZgD4MJ/fmChY/s3NEMzakA45bB+rz9ipDiKP0qXn6pGk+HrfVKPl6NnN7SwxlicwGnaFhPJ7SHMJ8nAK22JteCbDsinha6PMTKHWXRyDoPouaRVjrfnCXOjDyunxBZiN2M403kbLO7aCRmw774AceXPio4hQt8+j2hwzqX/ANeqz8k13nR9ptqNfBHhoImxHWGBrPRa0gBzsoFAMAJvyHNRJ9nsfG2PUBlbtzTTmECgWnka/wAFD2VgH/CmB8+9c5pY25GPABcy7DYGEagc+S7b+aU3rx+934VWE6MY6q3LXepedOvKWjvz03pvM4h+zXQuDsM0UWubI10j2guOUtedHW4U6zVnNqVh2xomxh0sjxTbxJMriJQBZEuYm23rWmljgSF3H805/Xj97vwqBtfYL4YwZcjmuOWhZ11dqCB0UqVFu0Wn0REo14q8k11fPzKBu0rALYJyOXcDdOWjnAj2hJMe7u1G5uaVrDvABo7Nq2ieit8DgpJ3ZY22eZ5DxJVR2l2bFhcQBjQ54lfGyAtje9jYy07x7a/rGu4gDMQ5leFqlaNN2cs99jK0qMqmcY5b6tGfjA/kJ/qt/EnxifyGI+q38SucF2dxLMMx7gXGrLTe8a2zkzj1suW9Sbtbdl7HkxAcWFoymjmJHHpQKmNWLhjxZdxEqMozwYc+/M5XF4ovmwo3crKmcbeAB/R59NHnVSsIKxE4GliNx8XFrgT501o9gVxtrs1MJ8E0uZb53NFF3EYXEO17vRpW3B9mZTi8QzNHbWwk6u5iSq7vgqfHp3zlz9Gi64erZ/K9PVdvQ5Ha2xc0zpBFvDJWb5PDuy5RQ+d1s9fAdAs7I2OGyB5gbHk1B3WFBNgjR0feHFdLtWE4Z5ZIRba9HW7FirUFuNZV3XhzW0aafzLTUwlUkvllrpmSEVVhcSQ+3ONa9Spz8WwEC+PTl5rVoyUkzeiIoJCIiAIiIAiIgCo+0vP+zYr+4xXiqNt0JYXGV0LQJAZG5dCclAl7XAXR5clnU+nvRpS+rx8mRWHQeSy4pvovznL/AOW/gLy6eL85y+/DfwVdVo7aM3w8u3wZ9uwHzUf6rf7oXC7Y7X4iOeWINjLWPLQHNJsA1rrqu62f81Hrfcbr17o1UKXZuFc4uc1hcTbrdz52LXjUJ04yeONz3a8KkopU5W/hSdlccYBDC8ZYMQLwJ/JuAJdhiTyFF0Z5tBb9AF1xsuEMxWJA4HdurxIcT++z7VG7VPgOCliNOOQ7ljXU7eNGaLIW6scHBpDhwIBXNfyebTnlxMmaV+Ia+IPxEj2NYY5WlrY2jK1oGYGTukEjdjrrCTwya0fuvEltOUI3u17PwOu7R7Rfh42uZltzqOYXpRPUdFq7O7XfiC8PaLZRttga3oQSeissbuaAmyUT3c9Vm8L5rk+0G03tbNHhMsLIXNie5ga102IkLWxwxEghjQXszy0aDiBRBLYxQ+HbDn1JwTdXFiy6Fv2twudkZHpZw1v+8Dp7wFb4PDNhYGN4NHvPMnxK+QybOY/FRYc4jEg7txkndPIZN9vIm7wW8hmWzTRoBxviumwO0cSzDmCeUSNlMmEzvovhxPejYHZXN3kMhy5CSHjOwOcc2ZtqqlGEYPtK0XCc5Tj2Le+RIxfbKUuzQtibFYp0ocS9uYagBzcmYHS9QSLHJXey8XiMRCHtkgDgMr7heQHiM6gb70c5a6r9G23feHy7bGHfMGPY3OG22SPeyMt1huU5LFscLJ5FhC+hfyb4SSLB1IbdmILsznZyOLrdrqeXLhyW1ejCMMlpbPqYcNXqTn8z65dPX+oq+1OAlimzB0eWUlwAY4VT22PT45b16uuqFGX2a2HHiIc8zpcwcW/Iz4nDtrKDqyKUAmydTrwHJS+27x8kOfePs7v/AF7FL7Gf0c/7Q/3Wq023wqb3mVppR4tpdH5FPtbZQw+Iw4he+nEF2+lnxJsSR1lMspyis2g4kg8tep3eJv5yGuY3T7/rL13vjF9R/rDJVdpf6Thf1v8AmYukK56i/wBcH2PzOul/6VPuvJHFDa+0/wAlH9hNxpv6Xrn9haORJgbZ2hjJWhszY2NzZm/JSMJouHF0hvuuaOHEE8wB0o7WwerJ7m/iVPt7a8eIdEWhwEZJdmAHEt4UT0K6qUGpq9O3bd+5xVqi+G7Vb9mXsdLsLAfB4GMdRfQ3pAoOfXeoEmh0FnRcP2p2j8Kxc8LQMkUD8NmN+nMQZC2iKLRHHR8T1X0HGCQxu3T2sfXdc9pkaOfeaHNJHtC+N7PmxBDpRFC/fuMwdvHMzB3oHKYzQyBtanRYcNFVJtzz5nRxcnTppQy5b/J9G7P9qo5sIyaYhklASM4nOBTso8wR4UocXaJsckjo4dJCCbdWo4mgDVri9hYXEmSZuWMNYd69jM0hAmzEHNp3czZPo8eatF10uGp2e99TjrcVVuvFPatp0OmxWPOIl2dIW5f+1yCrvhgcXzpRNpbXlw+0cQGBhDo8OTmDrob66ojqPceN6MF/4b/a5f8A2OLUDtN/3lP/ALKH/wCVckKcXXcGss/U66lWa4ZTTzst9Cs25jJZs0kjosxaBTWOrMGNbYBkuswca6EC9CTRsjkJoFhs8Mp4Zv1/V0vrr4Kdi8KRmfpV37yvGBkDX689L6L2IwUY2XqeJOblK8reCNMmCnY3McjqGobbeWtWTz9wTDOa4tJuifEferuaVrWkk6feudwgsWB6TiW8NQTodCbvj7Ui3ewkla50lIo2Bgcy83Oq1vqpKgsgiIgCIiAIiIAvS8qv207usDjUbpWtmN1TCDQJ5AuytPg5RJ2Vy0Vd2J5lHrD3qpxW/wB+JWNgLWMcxmaZzSc5YSTURr0AK148VsxWzcJFG55wsJDBdCOOz5WFE3MX5rd9nhf4qpJv13kTFJZ928z7PgZ27plubeVt6j1Qvnu38Qxs07y4U0ucTx0Fk8OK5n4ND+az9nhP4qyIYvzWfs8L/FXNQouk2769jOviOIVaKi1+V0PWOx5nifHGzIHtLQ+V8cY1HENBL/eArXspA+Kds8ceE+SPfaycsc4OY9tNzMynWjRI4BV+CwmGkLgcGxjmVma+KG9RYPcJH71LOx8P/o8H2bP8FpUpOpG1+/aM6VVUpad3d1fZbRHSbf7RR4hscLmPilsvySZHAtaMriJInuYdXt0zXrwVPsTDYOfD4R0kMDpTi3DFvexjnPzDEO77nCyC+hR6Kp+CYMf1EP2LfwrJw2D/ACMP2TfwrN8I3TUG9L/k0XHRVRztrb8Ft2t2Dg2Y2MxwwBjoXl7WsjDQ4SRNBoCrIdX/AOqPHDg3YXaj2Q4ds8YzYbKyMObI3CQ5DDQtvygBoc3HqoAwmD/IQ/ZN/Ct+GwOGJtkENtogiJoIPIg1oUfCNwUW9OeYXGpVHNc+Vz6RjezOFmeZHsIe70yx7482jhrkIv03Hzo8QCtk2ChhZmL5GNbdASyAcWOoNDtfmxp0c8fSdfHt2pOBQmf9YlRppnPNvcXHq4k/eqLgpuylLLv9cjV8dBZxhn3emZa4DDR43FnebwsDTkBlk0ALqs5v0jj9X1W102H2HFG3KwytGugml5hgJ9L9GPaXn6Tr4JryNQSPLRZdKToXOPmVerwmJ/K7JcjKlxmBfNG765exdbWbGcbCGPkdke3MTI9wzGUvIFuqhmquFBreDQB25C+Vl1a9NdPBRI+0DSSA+TRzmc+LLu9fBRU4RNRSehNPjnFybV75+C+x3o7HYX9Lxv52T1s3XheldNOGir9t9lsPFhnuYZraAATNIeNRn6XGnHXrR4i1x3852ZM+eXLu97fe9H38fBe5NvNstcZPTEet0SQCOeoUx4eopJufn7ifE03FpU+q3kdPiNul2Adhw4ieQNw0JGpJlc2Frx4sD8x8GErpZthYdwaDGO40NbRLe6BQBo66BfKJtoQyPjJLxkc97RlqywOjN/WsexWWG7Uu9Fsso7rX1btA+656HunRVlwrxt05W8fQtDjFgUakb+H25nZ7R3eDxeGlFMikbJhZKGl1v4nE8dN1K3xMq5nbcrcTMZBbBwaGuLbFg24NOrtOPQkcyoe0WuxDRne+w5r2mySC1weOPlR8CV6ljD2lp4HjRI/eNQtKHDfDbbze+/vMq/FfESilZb7u46fYmxmz4WK5JWOgmfLG9jhmDix8Z1eHWMsrhXj4Lldp4R/w7EMkndNkbHG2QVG6spdll3dNMgzDUAaOboLK0s2cwCgZAPCWYf8AOpEEDY25WAAWTQ6k2SepJ1J5qIcM1Vc3oTPiouiqavfLMiY6CmkgvNmz33ad4u4Xws1XShwCrDs45buWqq87r4Zb4343114rolghdiSXI4m2+ZzgwwJ4E8wLJ1sHh5gKVG1zHi268h18lPwmEyG7vSuFf8VLpWuloUwt6hYRFUuEREAREQBERAFh7QQQQCDoQdQR4hZRCSm2tsqBkD3NiY0tFtIFVqOCTMbvD3Wf0hp/o0p1rjmui79N6I5q1xEDZGOY4W1wo6kaeY1Ch/EzPXxH7RP+NZYM8kaKeWbe7exWCeNrm3GPk3SE1gsT9IV3DqAfWOublSRZC0gRs7sBabwWIaPSumgnWPX5sWSb1Vn8TM9fEftE/wCNPiZnr4j9on/GmBjEjGzPTl/Vi4AtHzXJp1b5HgrJR8HgmRZsuYl1Fxe9zyaFDVxJUhXgmlmVm03l2HL7ScRw3vE/NNEnvBBrzXjCRuNOMkta92QRjqNabfttdJtHZEbMOJ2TFxLgx7C2i0kOPGzY7qpleLU3iT80ZSxQWF+j17v39jVPiWR1ncG3ws1fkOfFSNm7VhBcN4OA4Bx+4KHicBHI4OcKcODmktOhsajjqOalbN2YC4u30wIFWJOV3WoPRVl8TPSxMPhZXvfu/ZZfG8Prn6j/AMKrG9onkW2AkHgRvyD5EQKy+Lj/AKRiPrt/CtEOyHMaGNxeIDW6NHyBoeZhtZtT6/j3Nk6a5fn+GNn7ejkIa643lxaGkP1ogaOcxvUacQrZVEOwmtkEjpZnlpLgHFgFlwcScrBerQrdWhit82/Qipgv8m/U8TeifI/cqKOPWgALPlqeZV5N6LvI/cqbD+m3zH3rWJhM3fFZy5aZlqq5V0quC8YjBlot2Xjpz18NFbTTBgs+zxVPNKXmz7B08kV2RJJGrKLBrUcOuvRWeCwQac7gMx08hy+8+9ZwWEy953HkOn+amI2TGPNhVkmClyvJcZHvIoNkdAGsBOUNLcxB1snmT0Aq0VY/Zhyv1Ej3kEulsd0XlaMlUBZ4cSSeaymr7/vkbQdt/wA8yH8AxHqP/bp/4SfAMR6j/wBun/hL38USepB9ab/FPiiT1IPrTf4rOz6b/wCTXEuu/wDo9YXZkhdUm9YK4txk7zfSsrfHW+SuI2ZQBqaFWSSdOpOpPiqrDbI1+UZFVfQdLd+08OKto2BoDRwAoeQ0CvBNct+CM5tcnvxYREWhmEREAREQBERAEREAREQBERAEREAREQArGUdAsogMZR0CyAiISEREICIiA8TeifI/cqaJ1EHoQVczeifI/cqNXiZz1Nk0pebPsHTyU/BYTL3nceQ6f5pgsJl7zuPIdP8ANTVVvoTGPNhYRFBcLKwiAyiwiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgMTeifI/comCwmXvO48h0/zUxEuRbMIiISEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/Z',
        url: '',
      },
    ],
  },

  experiences: {
    title: 'Experiences',
    experiences: [
      {
        title: 'Software Engineer',
        description:
          'Atuei em projetos para monitoramento de usinas solares com o uso de IoTs.',
        startDate: 'May 2022',
        endDate: 'Feb 2023',
        company: 'Solfácil',
        companyUrl: 'https://www.linkedin.com/company/solfacil/',
      },
      {
        title: 'Softare Developer Full Stack',
        description: 'Teste',
        startDate: 'May 2021',
        endDate: 'May 2022',
        company: 'Company teste',
        companyUrl: '',
      },
      {
        title: 'Softare Developer Full Stack',
        description: 'Teste',
        startDate: 'Feb 2020',
        endDate: 'May 2021',
        company: 'Company teste',
        companyUrl: '',
      },
    ],
  },
}
