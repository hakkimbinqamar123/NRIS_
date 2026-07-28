export default function HeroIllustration({ className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white shadow-2xl ${className}`}>
      <svg
        viewBox="0 0 600 420"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="navyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A5FB4" />
            <stop offset="55%" stopColor="#0B4EA2" />
            <stop offset="100%" stopColor="#062F63" />
          </linearGradient>
          <linearGradient id="lightBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DCEBFB" />
            <stop offset="100%" stopColor="#9EC2ED" />
          </linearGradient>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F0748A" stopOpacity="0" />
            <stop offset="50%" stopColor="#E94057" />
            <stop offset="100%" stopColor="#F0748A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3E86D6" />
            <stop offset="100%" stopColor="#0B4EA2" />
          </linearGradient>
        </defs>

        {/* base white background */}
        <rect x="0" y="0" width="600" height="420" fill="#FFFFFF" />

        {/* thin diagonal accent stroke */}
        <line x1="150" y1="-10" x2="640" y2="300" stroke="#F6B9C4" strokeWidth="2" opacity="0.7" />
        <line x1="120" y1="-10" x2="610" y2="300" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />

        {/* main navy diagonal sash */}
        <path
          d="M150,0 L600,0 L600,420 L270,420 C190,420 120,378 96,308 C55,190 55,95 150,0 Z"
          fill="url(#navyGrad)"
        />

        {/* soft light-blue ribbon flowing across upper-left of navy */}
        <path
          d="M0,90 C90,40 190,10 300,60 C230,110 170,180 140,270 C90,220 30,170 0,150 Z"
          fill="url(#lightBlueGrad)"
          opacity="0.55"
        />

        {/* red wavy accent line */}
        <path
          d="M20,255 C130,215 220,300 330,260 C420,228 500,255 590,215"
          stroke="url(#redGrad)"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* light blue bottom wave revealing white card underneath */}
        <path
          d="M0,420 L0,345 C90,300 190,368 300,350 C410,332 510,388 600,352 L600,420 Z"
          fill="url(#lightBlueGrad)"
        />
        <path
          d="M0,420 L0,378 C110,345 210,400 320,382 C430,364 520,405 600,382 L600,420 Z"
          fill="#FFFFFF"
        />

        {/* shield with cross */}
        <g transform="translate(300,210)">
          <path
            d="M0,-95 L78,-62 C78,10 46,72 0,100 C-46,72 -78,10 -78,-62 Z"
            fill="url(#shieldGrad)"
            stroke="#EAF3FC"
            strokeWidth="4"
          />
          <path
            d="M0,-95 L0,100 C-46,72 -78,10 -78,-62 Z"
            fill="#0B4EA2"
            opacity="0.35"
          />
          <rect x="-11" y="-46" width="22" height="76" rx="6" fill="#F0748A" />
          <rect x="-38" y="-19" width="76" height="22" rx="6" fill="#F0748A" />
        </g>
      </svg>
    </div>
  );
}
