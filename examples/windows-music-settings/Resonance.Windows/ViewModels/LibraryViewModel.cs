using Resonance.Models;

namespace Resonance.ViewModels;

public sealed class LibraryViewModel
{
    public IReadOnlyList<Album> Featured => TrackLibrary.Albums.Take(3).ToList();
    public IReadOnlyList<Album> Rest     => TrackLibrary.Albums.Skip(3).ToList();
    public IReadOnlyList<Album> Albums   => TrackLibrary.Albums;
}
