import axios from 'axios'

const getLtestRepositories = async (username: string, token?: string) => {
  const githubApi = 'https://api.github.com/search/repositories?q=user'

  try {
    if (token) {
      const response = await axios.get(
        `${githubApi}:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )

      let repositories = response.data.items
      let latestSixRepositories = repositories.slice(0, 6)

      return latestSixRepositories
    } else {
      const response = await axios.get(
        `${githubApi}:${username}+sort:author-date-asc`
      )

      let repositories = response.data.items
      let latestSixRepositories = repositories.slice(0, 6)

      return latestSixRepositories
    }
  } catch (err) {
    console.error(err)
  }
}

export default getLtestRepositories
