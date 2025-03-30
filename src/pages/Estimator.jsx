const MapEmbed = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // Adjusts to full viewport height
        overflow: "hidden", // Prevents the parent from showing scrollbars
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <iframe
        src="https://xpmaps.com/cost?_embed=1"
        className="border-0"
        allowFullScreen
        style={{
          width: "100%", // Full width of the container
          height: "100%", // Ensures iframe takes the full height of its container
          border: "none", // Removes default border
        }}
      />
    </div>
  );
};

export default MapEmbed;
