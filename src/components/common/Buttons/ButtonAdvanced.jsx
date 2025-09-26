import React from 'react';

const ButtonAdvanced = ({ label }) => {
  return (
    <button
      className="relative group overflow-hidden flex px-4 py-[14px] z-40 justify-center items-center self-stretch w-fit min-w-[140px]
          rounded-md no-underline text-center cursor-pointer font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-none
          border border-[rgba(29,170,145,0.8)] bg-[rgba(29,170,145,0.5)] text-white/70
          transition-all duration-700 ease-in-out
          before:absolute before:bottom-0 before:left-0 before:w-full before:h-0
          before:bg-[radial-gradient(60%_90%_at_center_bottom,rgba(29,170,145,0.5),rgba(29,170,145,0))]
          before:opacity-0 before:transition-all
          hover:text-white 
          hover:bg-[rgba(29,170,145,0.3)] 
          hover:border hover:border-[rgba(29,170,145,0.8)] 
          hover:shadow-[0_0_10px_7px_rgba(29,170,145,0.4)]"
    >
      {/* effect containers */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-0 transition-all duration-500 ease-in-out hover:opacity-100">
        {/* sparkle 1 */}
        <div className="absolute flex flex-col items-center w-auto transition-all duration-700 ease-in-out left-[10%] bottom-0 translate-y-[100px] group-hover:animate-[sparkle_1.4s_linear_infinite]">
          {/* s blur */}
          <div className="w-[12px] h-[12px] rounded-full bg-white/70 relative z-10 filter blur-[6px]"></div>

          {/* s line */}
          <div className="w-px h-[40px] rounded-[2px] mt-[-7px] relative z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),transparent)]"></div>
        </div>

        {/* sparkle 2 */}
        <div className="absolute flex flex-col items-center w-auto transition-all duration-700 ease-in-out left-[30%] bottom-0 translate-y-[80px] group-hover:animate-[sparkle_0.8s_linear_infinite]">
          {/* s blur */}
          <div className="w-[12px] h-[12px] rounded-full bg-white/70 relative z-10 filter blur-[6px]"></div>

          {/* s line */}
          <div className="w-px h-[40px] rounded-[2px] mt-[-7px] relative z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),transparent)]"></div>
        </div>
        {/* sparkle 3 */}
        <div className="absolute flex flex-col items-center w-auto transition-all duration-700 ease-in-out left-[70%] bottom-0 translate-y-[120px] group-hover:animate-[sparkle_1.2s_linear_infinite]">
          {/* s blur */}
          <div className="w-[12px] h-[12px] rounded-full bg-white/70 relative z-10 filter blur-[6px]"></div>

          {/* s line */}
          <div className="w-px h-[40px] rounded-[2px] mt-[-7px] relative z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),transparent)]"></div>
        </div>

        {/* sparkle 4 */}
        <div className="absolute flex flex-col items-center w-auto transition-all duration-700 ease-in-out left-[90%] bottom-0 translate-y-[90px] group-hover:animate-[sparkle_1.3s_linear_infinite]">
          {/* s blur */}
          <div className="w-[12px] h-[12px] rounded-full bg-white/70 relative z-10 filter blur-[6px]"></div>

          {/* s line */}
          <div className="w-px h-[40px] rounded-[2px] mt-[-7px] relative z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),transparent)]"></div>
        </div>

        {/* sparkle 5 */}
        <div className="absolute flex flex-col items-center w-auto transition-all duration-700 ease-in-out left-[80%] bottom-0 translate-y-[160px] group-hover:animate-[sparkle_1.1s_linear_infinite]">
          {/* s blur */}
          <div className="w-[12px] h-[12px] rounded-full bg-white/70 relative z-10 filter blur-[6px]"></div>

          {/* s line */}
          <div className="w-px h-[40px] rounded-[2px] mt-[-7px] relative z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),transparent)]"></div>
        </div>

        {/* sparkle 6 */}
        <div className="absolute flex flex-col items-center w-auto transition-all duration-700 ease-in-out left-[20%] bottom-0 translate-y-[70px] group-hover:animate-[sparkle_1s_linear_infinite]">
          {/* s blur */}
          <div className="w-[12px] h-[12px] rounded-full bg-white/70 relative z-10 filter blur-[6px]"></div>

          {/* s line */}
          <div className="w-px h-[40px] rounded-[2px] mt-[-7px] relative z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),transparent)]"></div>
        </div>

        {/* dot 1 */}
        <div className="w-[2px] h-[2px] absolute bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.3)] animate-dotLevitation opacity-40 animate-[dotLevitation_14s_ease-in-out_infinite_reverse]  bottom-[70%] left-[10%]"></div>

        {/* dot 2 */}
        <div className="w-[3px] h-[3px] absolute bg-white/50 shadow-[0_0_4px_rgba(255,255,255,0.3)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_10s_ease-in-out_infinite_reverse]  bottom-[30%] left-[20%]"></div>

        {/* dot 3 */}
        <div className="w-[2px] h-[2px] absolute bg-white/40 shadow-[0_0_4px_rgba(255,255,255,0.1)] animate-dotLevitation opacity-40 animate-[dotLevitation_12s_ease-in-out_infinite_reverse]  bottom-[45%] left-[30%]"></div>

        {/* dot 4 */}
        <div className="w-[2px] h-[2px] absolute bg-white/60 shadow-[0_0_4px_rgba(255,255,255,0.4)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_10s_ease-in-out_infinite_reverse]  bottom-[50%] left-[40%]"></div>

        {/* dot 5 */}
        <div className="w-[3px] h-[3px] absolute bg-white/80 shadow-[0_0_4px_rgba(255,255,255,0.3)] animate-dotLevitation opacity-40 animate-[dotLevitation_11s_ease-in-out_infinite_reverse]  bottom-[10%] left-[50%]"></div>

        {/* dot 6 */}
        <div className="w-[2px] h-[2px] absolute bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.2)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_13s_ease-in-out_infinite_reverse]  bottom-[60%] left-[60%]"></div>

        {/* dot 7 */}
        <div className="w-[3px] h-[3px] absolute bg-white/50 shadow-[0_0_4px_rgba(255,255,255,0.1)] animate-dotLevitation opacity-40 animate-[dotLevitation_15s_ease-in-out_infinite_reverse]  bottom-70%] left-[80%]"></div>

        {/* dot 8 */}
        <div className="w-[2px] h-[2px] absolute bg-white/60 shadow-[0_0_4px_rgba(255,255,255,0.4)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_12s_ease-in-out_infinite_reverse]  bottom-[25%] left-[80%]"></div>

        {/* dot 9 */}
        <div className="w-[2px] h-[2px] absolute bg-white/60 shadow-[0_0_4px_rgba(255,255,255,0.3)] animate-dotLevitation opacity-40 animate-[dotLevitation_10s_ease-in-out_infinite_reverse]  bottom-32%] left-[8%]"></div>

        {/* dot 10 */}
        <div className="w-[3px] h-[3px] absolute bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.2)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_14s_ease-in-out_infinite_reverse]  bottom-[55%] left-[100%]"></div>

        {/* dot 11 */}
        <div className="w-[2px] h-[2px] absolute bg-white/60 shadow-[0_0_4px_rgba(255,255,255,0.1)] animate-dotLevitation opacity-40 animate-[dotLevitation_11s_ease-in-out_infinite_reverse]  bottom-15%] left-[85%]"></div>

        {/* dot 12 */}
        <div className="w-[2px] h-[2px] absolute bg-white/40 shadow-[0_0_4px_rgba(255,255,255,0.2)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_10s_ease-in-out_infinite_reverse]  bottom-[90%] left-[95%]"></div>

        {/* dot 13 */}
        <div className="w-[3px] h-[3px] absolute bg-white/50 shadow-[0_0_4px_rgba(255,255,255,0.1)] animate-dotLevitation opacity-40 animate-[dotLevitation_12s_ease-in-out_infinite_reverse]  bottom-40%] left-[65%]"></div>

        {/* dot 14 */}
        <div className="w-[2px] h-[2px] absolute bg-white/90 shadow-[0_0_4px_rgba(255,255,255,0.3)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_13s_ease-in-out_infinite_reverse]  bottom-[65%] left-[90%]"></div>

        {/* dot 15 */}
        <div className="w-[3px] h-[3px] absolute bg-white/60 shadow-[0_0_4px_rgba(255,255,255,0.4)] animate-dotLevitation opacity-40 animate-[dotLevitation_15s_ease-in-out_infinite_reverse]  bottom-75%] left-[45%]"></div>

        {/* dot 16 */}
        <div className="w-[2px] h-[2px] absolute bg-white/80 shadow-[0_0_4px_rgba(255,255,255,0.2)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_12s_ease-in-out_infinite_reverse]  bottom-[65%] left-[25%]"></div>

        {/* dot 17 */}
        <div className="w-[2px] h-[2px] absolute bg-white/40 shadow-[0_0_4px_rgba(255,255,255,0.1)] animate-dotLevitation opacity-40 animate-[dotLevitation_11s_ease-in-out_infinite_reverse]  bottom-30%] left-[55%]"></div>

        {/* dot 18 */}
        <div className="w-[3px] h-[3px] absolute bg-white/70 shadow-[0_0_4px_rgba(255,255,255,0.3)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_14s_ease-in-out_infinite_reverse]  bottom-[20%] left-[15%]"></div>

        {/* dot 19 */}
        <div className="w-[3px] h-[3px] absolute bg-white/50 shadow-[0_0_4px_rgba(255,255,255,0.2)] animate-dotLevitation opacity-40 animate-[dotLevitation_10s_ease-in-out_infinite_reverse]  bottom-75%] left-[70%]"></div>

        {/* dot 20 */}
        <div className="w-[2px] h-[2px] absolute bg-white/60 shadow-[0_0_4px_rgba(255,255,255,0.4)] animate-dotLevitation opacity-40 animate-[dotLevitationAlt_12s_ease-in-out_infinite_reverse]  bottom-[50%] left-[40%]"></div>
      </div>

      {label}
    </button>
  );
};

export default ButtonAdvanced;
