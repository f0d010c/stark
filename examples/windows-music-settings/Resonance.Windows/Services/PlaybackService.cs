using CommunityToolkit.Mvvm.ComponentModel;
using Microsoft.UI.Dispatching;
using Resonance.Models;
using System.Threading;

namespace Resonance.Services;

public sealed partial class PlaybackService : ObservableObject
{
    private readonly DispatcherQueue _dispatcher;
    private readonly DispatcherQueueTimer _timer;

    [ObservableProperty] private Track? currentTrack;
    [ObservableProperty] private bool isPlaying;
    [ObservableProperty] private double positionSeconds;
    [ObservableProperty] private bool shuffle;
    [ObservableProperty] private RepeatMode repeat = RepeatMode.Off;
    [ObservableProperty] private double volume = 0.8;

    private int _index = 0;

    public PlaybackService()
    {
        _dispatcher = DispatcherQueue.GetForCurrentThread();
        _timer = _dispatcher.CreateTimer();
        _timer.Interval = TimeSpan.FromMilliseconds(250);
        _timer.Tick += (_, _) => Tick();
        Load(0);
    }

    public IReadOnlyList<Track> Queue { get; private set; } = TrackLibrary.Tracks;

    public void Load(int index)
    {
        if (Queue.Count == 0) return;
        _index = ((index % Queue.Count) + Queue.Count) % Queue.Count;
        CurrentTrack = Queue[_index];
        PositionSeconds = 0;
    }

    public void Play(Track t)
    {
        var i = Queue.ToList().IndexOf(t);
        if (i >= 0) Load(i);
        IsPlaying = true;
        _timer.Start();
    }

    public void TogglePlay()
    {
        IsPlaying = !IsPlaying;
        if (IsPlaying) _timer.Start(); else _timer.Stop();
    }

    public void Next()
    {
        Load(_index + 1);
        if (IsPlaying) _timer.Start();
    }

    public void Previous()
    {
        if (PositionSeconds > 3) { PositionSeconds = 0; return; }
        Load(_index - 1);
        if (IsPlaying) _timer.Start();
    }

    public void SeekTo(double seconds)
    {
        if (CurrentTrack is null) return;
        PositionSeconds = Math.Clamp(seconds, 0, CurrentTrack.DurationSeconds);
    }

    private void Tick()
    {
        if (CurrentTrack is null) return;
        PositionSeconds += 0.25;
        if (PositionSeconds >= CurrentTrack.DurationSeconds)
        {
            if (Repeat == RepeatMode.One) { PositionSeconds = 0; return; }
            Next();
        }
    }
}

public enum RepeatMode { Off, All, One }
