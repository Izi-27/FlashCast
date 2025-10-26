# FlashCast
Real-Time Event Derivatives
# FlashCast ⚡

**Real-Time Event Derivatives on Linera**

FlashCast is a decentralized platform for micro-event prediction markets, where users can bet on outcomes that resolve in minutes or seconds. Built on Linera's microchain architecture, it enables instant, gasless trading on real-world events.

## 🎯 Project Vision

Traditional prediction markets are too slow for real-time events. FlashCast leverages Linera's microchain architecture to create isolated, high-performance markets for micro-events like:
- "Next goal in soccer match within 2 minutes"
- "BTC price spike >1% in 60 seconds"
- "Next kill in esports match in 30 seconds"

## 🏗️ Architecture

### Core Components
- **Market Factory Microchain**: Spawns and manages new prediction markets
- **Market Microchains**: Isolated chains for each active market
- **User Microchains**: Individual chains for each user's assets and positions
- **Oracle Service**: Resolution mechanism with upgradeable trust models
- **AI Agent Microchains**: Autonomous traders operating as peers

### Tech Stack
- **Blockchain**: Linera Protocol
- **Smart Contracts**: Rust with Linera SDK
- **Frontend**: Next.js + TypeScript
- **AI Integration**: MCP (Model Context Protocol) + GraphQL
- **Oracles**: Custom resolution service → TEE/Committee-based

## 🚀 Quick Start

### Prerequisites
- Linera CLI installed
- Rust toolchain
- Node.js 18+

### Local Development

1. **Clone and setup:**
```bash
git clone https://github.com/your-org/flashcast
cd flashcast
linera net up
```

1. Deploy contracts:

```bash
./scripts/deploy.sh
```

1. Start frontend:

```bash
cd frontend
npm install
npm run dev
```

1. Create your first market:

```bash
linera service --port 8080
# Visit http://localhost:3000 and create "ETH Price > $3500 in 60s"
```

📋 Wave Progression

Wave 1: Architectural Proof ✅

· Single market smart contract
· Basic cross-chain messaging
· Minimal UI for market interaction
· Manual oracle resolution

Wave 2: Functional Product 🚧

· Multi-market factory contract
· Enhanced wallet-integrated oracle
· Improved trading UI
· Market lifecycle management

Wave 3: Polished Experience 📅

· Sophisticated React interface
· Live data integrations (Binance API, Sports feeds)
· AI agent trading demo
· Real-time market updates

Wave 4: Scalable Platform 📅

· User-generated markets
· Advanced oracle mechanisms
· Performance metrics dashboard
· Load testing results

Wave 5: Ecosystem Player 📅

· Cross-app integrations
· Advanced AI agent strategies
· Tokenomics and fee model
· Partner API development

Wave 6: Mainnet Ready 📅

· Audit-ready codebase
· Production deployment
· Comprehensive documentation
· ETH Denver demo preparation

🎮 Demo Usage

Creating a Market

1. Connect your Linera wallet
2. Click "Create Market"
3. Define event: "Will Team A score in next 2 minutes?"
4. Set expiration: 120 seconds
5. Fund market liquidity

Trading

1. Browse active markets
2. Select "Yes" or "No" position
3. Enter stake amount
4. Confirm trade (instant, gasless)

Resolution

1. Oracle detects event outcome
2. Automatic payout distribution
3. Market status updated in real-time

🔧 Linera Features Used

· ✅ Microchain Architecture: Isolated markets and users
· ✅ Cross-chain Messages: Instant market resolution
· ✅ Predictable Performance: No gas wars, linear scaling
· ✅ MCP/GraphQL: AI agent integration
· ✅ Instant Finality: Web2-like user experience

🤝 Contributing

We welcome contributions! Please see our Contributing Guide and join our Discord.

1. Fork the repository
2. Create a feature branch
3. Submit a PR with comprehensive tests

🛣️ Roadmap

· Q1 2025: Wave 1-3 completion, testnet launch
· Q2 2025: Wave 4-5, AI agent ecosystem
· Q3 2025: Security audit, partner integrations
· Q1 2026: Mainnet launch on Linera
· ETH Denver 2026: Live demo and ecosystem announcement

📄 License

This project is licensed under the Apache 2.0 License - see the LICENSE file for details.

👥 Team
