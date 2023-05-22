import '../styles/tokens-grid.css'

interface TokenGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}
export function TokensGrid({ tokens, hasRemValue = false }: TokenGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <th>{Number(value.replace('rem', '')) * 16}px</th>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
